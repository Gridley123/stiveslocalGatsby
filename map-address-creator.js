const fs = require('mz/fs');
const path = require('path');
const slugCreator = require('slug');
const omit = require('lodash/omit');
const rp = require('request-promise');
const delivery = require('contentful');
const contentful = require('contentful-management');
require('isomorphic-fetch');
const consoleDir = (input) => {
  console.log('\n');
  console.dir(input, { depth: null })
};

async function main() {
  let queryClient, managementClient, space, allBusinessesArray;
  const APIkey = 'AIzaSyDtIe50sSV_T6sZ8TqNPM_BB75HdNygmtE';
  const googleURLroot = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  try {
    queryClient = await delivery.createClient({
      space: 'y0b96oybzoi1',
      accessToken: 'a276b203cbeb6a4e43e3ba20d0aecd6d16b37dc37ffab567c4b1ff101ba55569'
    });

    managementClient = await contentful.createClient({
      accessToken: 'CFPAT-fb0c5358f782e0864b0327dc067701dc9f02561a4d0bc06b6768d4300306870f'
    });

    space = await queryClient.getSpace('y0b96oybzoi1');
    managementSpace = await managementClient.getSpace('y0b96oybzoi1');

    allBusinessesArray = await queryClient.getEntries({
      content_type: 'business',
      select: 'fields.home_address_line_1,fields.home_address_line_2,fields.town,fields.postcode',
      'fields.location[exists]': false
    });

    for (business of allBusinessesArray.items) {
      let geocodeResponse, formattedAddress;

      try {
        if (business.fields) {
          console.log('\n\n');
          console.log(`Businesses with address but no Google maps geocode API formatted_address:`)
          consoleDir(business);
          const { home_address_line_1, home_address_line_2, town, postcode } = business.fields;
          const id = business.sys.id;
          const line1 = home_address_line_1 || '';
          const line2 = home_address_line_2 || '';
          const line3 = town || '';
          const line4 = postcode || '';
          const URL = encodeURI(`${googleURLroot}${line1},${line2},${line3},${line4}&key=${APIkey}`);
          geocodeResponse = await fetch(URL);
          geoCodeResJSON = await geocodeResponse.json();

          if (geoCodeResJSON.status !== 'ZERO_RESULTS') {
            formattedAddress = geoCodeResJSON.results[0].formatted_address;
            consoleDir(formattedAddress);
            const entry = await managementSpace.getEntry(id);
            consoleDir(entry);
            entry.fields.location = {
              'en-GB': formattedAddress,
            };
            const updateReturn = await entry.update();
            const pubishedUpdateReturn = await updateReturn.publish();
            consoleDir(pubishedUpdateReturn);
          }

        }
      } catch (err) {
        console.error(err);
      }
    }
  } catch (err) {
    console.error(err);
  }

}

main();