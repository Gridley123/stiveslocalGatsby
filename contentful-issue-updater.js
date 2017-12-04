// contentful-management.js v3.x.x
const delivery = require('contentful');
const contentful = require('contentful-management');
const fs = require('mz/fs');
const path = require('path');
const console = require('better-console');
const fm = require('front-matter');
const consoleDir = (input) => {
  console.dir(input, { depth: null })
};

async function main() {

  let queryClient, deliverySpace, space, publishedIssueDataArray;

  try {
    queryClient = await delivery.createClient({
      space: 'y0b96oybzoi1',
      accessToken: 'a276b203cbeb6a4e43e3ba20d0aecd6d16b37dc37ffab567c4b1ff101ba55569'
    });

    deliverySpace = await contentful.createClient({
      accessToken: 'CFPAT-fb0c5358f782e0864b0327dc067701dc9f02561a4d0bc06b6768d4300306870f'
    });

    publishedIssueDataArray = await getPublishedIssueData();

    consoleDir(publishedIssueDataArray);

    space = await deliverySpace.getSpace('y0b96oybzoi1');

    for (let issue of publishedIssueDataArray) {
      const issueExists = await checkIssue(issue);
      let imageFileName, imageFilePath, extension, contentType;

      console.log(`\nIssue exists: `);
      console.log(issueExists);

      if (!issueExists) {
        console.log('issue: ');
        consoleDir(issue);

        if (issue.hasOwnProperty('imageURL')) {
          imageFileName = issue.imageURL;
          console.log('image: ');
          consoleDir(imageFileName);

          imageFilePath = path.resolve(`./src/images${imageFileName}`);
          console.log(`imageFilePath: ${imageFilePath}`);

          extension = imageFileName.split('.').pop();
          contentType = `image/${extension}`;
          console.log(`contentType: ${contentType}`);
        }


        let imageAddReturn, newImageID, newIssueObjectReturn,
          newImageObjectReturnPublished;
        const contentfulIssueObj = {};

        try {
          if (issue.hasOwnProperty('imageURL')) {
            imageAddReturn = await addImage(imageFilePath, imageFileName, contentType);
            newImageID = imageAddReturn.sys.id;
            console.log(`newImageID: `);
            console.log(newImageID + '\n');
          }


          for (const prop in issue) {
            if (issue.hasOwnProperty(prop) && prop === 'imageURL') {
              contentfulIssueObj.image = {
                "en-GB": {
                  "sys": {
                    "type": "Link",
                    "linkType": "Asset",
                    "id": newImageID,
                  }
                }
              }
            }
            else if (issue.hasOwnProperty(prop) && prop!== 'embed_code') {
              contentfulIssueObj[prop] = {
                'en-GB': issue[prop]
              }
            }
          }

        } catch (err) {
          console.error(err);
        }
        consoleDir(contentfulIssueObj);
        newIssueObjectReturn = await space.createEntry('publishedIssue', {
          fields: contentfulIssueObj,
        });
        newImageObjectReturnPublished = await newIssueObjectReturn.publish();
        consoleDir(newImageObjectReturnPublished);
      }
      else
        console.log(`${issue.company_name} already added`);
    }
  } catch (err) {
    console.error(err);
  }

  async function checkIssue(issue) {
    let existingIssue;
    try {
      existingIssue = await queryClient.getEntries({
        content_type: 'publishedIssue',
        'fields.title': issue.title,
      });
    } catch (err) {
      console.error(err);
    }
    console.log(`\nExisting Issue?:`)
    consoleDir(existingIssue);

    if (existingIssue.total)
      return existingIssue;
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

  async function getPublishedIssueData() {
    let directory, fileNameArray, fileDataArr = [], fileReadPromiseArr = [];
    try {
      directory = path.resolve('./src/published-issues');
      fileNameArray = await fs.readdir(directory);
      consoleDir(fileNameArray);
      for(fileName of fileNameArray) {
        const filePath = path.join(directory, fileName);
        console.log(filePath);
        fileReadPromiseArr.push(fs.readFile(filePath, 'utf8'));
      }
      fileDataArr = await Promise.all(fileReadPromiseArr);
      return fileDataArr.map(data => fm(data).attributes);
    } catch(err) {
      console.error(err);
    }
  }
}

main();