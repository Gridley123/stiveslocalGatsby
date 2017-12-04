// contentful-management.js v3.x.x
const delivery = require('contentful');
const contentful = require('contentful-management');
const fs = require('mz/fs');
const path = require('path');
const console = require('better-console');
const consoleDir = (input) => {
  console.dir(input, { depth: null })
};

async function main() {


  let queryClient, deliverySpace, space, businessDataFileString, businessDataFileArray;

  try {
    queryClient = await delivery.createClient({
      space: 'y0b96oybzoi1',
      accessToken: 'a276b203cbeb6a4e43e3ba20d0aecd6d16b37dc37ffab567c4b1ff101ba55569'
    });

    deliverySpace = await contentful.createClient({
      accessToken: 'CFPAT-fb0c5358f782e0864b0327dc067701dc9f02561a4d0bc06b6768d4300306870f'
    });

    businessDataFileString = await fs.readFile(path.resolve('./src/local-business-directory/allData/localBusinessDB.json'), 'utf8');

    businessDataFileArray = JSON.parse(businessDataFileString).businesses;

    space = await deliverySpace.getSpace('y0b96oybzoi1');

    for (let business of businessDataFileArray) {
      const businessExists = await checkBusiness(business);
      let imageFileName, imageFilePath, extension, contentType;

      console.log(`\nBusiness exists: `);
      console.log(businessExists);
      if (!businessExists) {
        console.log('business: ');
        consoleDir(business);
        if (business.hasOwnProperty('image')) {
          imageFileName = business.image;
          console.log('image: ');
          consoleDir(imageFileName);

          imageFilePath = path.resolve(`./src/images/${imageFileName}`);
          console.log(`imageFilePath: ${imageFilePath}`);

          extension = imageFileName.split('.').pop();
          contentType = `image/${extension}`;
          console.log(`contentType: ${contentType}`);
        }

        const categories = business.categories;
        console.log(`categories: `);
        consoleDir(categories);

        let imageAddReturn, newImageID, categoryIDArray = [], newBusinessObjectReturn,
          newBusinessObjectReturnPublished;
        const contentfulBusinessObj = {};

        try {
          if (business.hasOwnProperty('image')) {
            imageAddReturn = await addImage(imageFilePath, imageFileName, contentType);
            newImageID = imageAddReturn.sys.id;
            console.log(`newImageID: `);
            console.log(newImageID + '\n');
          }

          for (let category of categories) {
            let catExists, catReturnId, newCatEntryReturn;
            try {
              catExists = await checkCatExistence(category);
              console.log('\n\ncatExists: ');
              consoleDir(catExists);
              if (catExists) {
                catReturnId = catExists.items[0].sys.id;
              } else {
                newCatEntryReturn = await space.createEntry('categories', {
                  fields: {
                    name: {
                      'en-GB': category
                    },
                  }
                });
                newCatEntryReturnPublishedId = await newCatEntryReturn.publish();
                catReturnId = newCatEntryReturnPublishedId.sys.id;
              }
              console.log(`catReturnID: ${catReturnId}`);
              categoryIDArray.push(catReturnId);
            } catch (err) {
              console.error(err);
            }
          }
          console.log('\n\nCategory ID Array:');
          consoleDir(categoryIDArray);

          for (const prop in business) {
            if (business.hasOwnProperty(prop) && prop === 'image') {
              contentfulBusinessObj[prop] = {
                "en-GB": {
                  "sys": {
                    "type": "Link",
                    "linkType": "Asset",
                    "id": newImageID,
                  }
                }
              }
            }
            else if (business.hasOwnProperty(prop) && prop === 'categories') {
              const categoryArray = [];

              for (categoryID of categoryIDArray) {
                categoryArray.push(
                  {
                    "sys": {
                      "type": "Link",
                      "linkType": "Entry",
                      "id": categoryID,
                    }

                  }
                )
              }
              contentfulBusinessObj.categories = { "en-GB": categoryArray };
            }
            else if (business.hasOwnProperty(prop)) {
              contentfulBusinessObj[prop] = {
                'en-GB': business[prop]
              }
            }
          }

        } catch (err) {
          console.error(err);
        }
        consoleDir(contentfulBusinessObj);
        newBusinessObjectReturn = await space.createEntry('business', {
          fields: contentfulBusinessObj,
        });
        newBusinessObjectReturnPublished = await newBusinessObjectReturn.publish();
        consoleDir(newBusinessObjectReturnPublished);
      }
      else
        console.log(`${business.company_name} already added`);
    }
  } catch (err) {
    console.error(err);
  }

  async function checkBusiness(business) {
    let existingBusiness;
    try {
      existingBusiness = await queryClient.getEntries({
        content_type: 'business',
        'fields.company_name': business.company_name,
      });
    } catch (err) {
      console.error(err);
    }
    console.log(`\nExisting Business?:`)
    consoleDir(existingBusiness);

    if (existingBusiness.total)
      return existingBusiness;
    else
      return false

  }

  async function addImage(filePath, imageFileName, contentType) {
    let imageData;
    try {
      imageData = await fs.readFile(filePath);
      return saveImageFile();
    } catch (err) {
      console.error(err);
    }

    async function saveImageFile() {
      let createEntryReturn;
      try {
        createEntryReturn = await space.createAssetFromFiles({
          fields: {
            title: {
              'en-GB': imageFileName
            },
            file: {
              'en-GB': {
                contentType,
                fileName: imageFileName,
                file: imageData,
              }
            }
          }
        });
        createProcessedEntryReturn = await createEntryReturn.processForAllLocales();
        createPublishedEntryReturn = await createProcessedEntryReturn.publish();
        return createPublishedEntryReturn;
      } catch (err) {
        console.error(err);
      }
    }
  }

  async function checkCatExistence(category) {
    let existingCategories;
    try {
      existingCategories = await queryClient.getEntries({
        content_type: 'categories',
        'fields.name': category,
      });
    } catch (err) {
      console.error(err);
    }

    if (existingCategories.total)
      return existingCategories;
    else
      return false
  }

}

main();