const fs = require('mz/fs');
const path = require('path');
const omit = require('lodash/omit');
const file1 = path.resolve('./src/local-business-directory/allData/categories/allCategories.json');
const file2 = path.resolve('./src/local-business-directory/allData/localBusinessDB.json');

// fs.readFile(file1, 'utf8')
//   .then(string => JSON.parse(string))
//   .then((catObj) => {
//     fs.readFile(file2, 'utf8')
//       .then(string => JSON.parse(string))
//       .then((businessObj) => {
//         businessObj.businesses.forEach((business) => {
//           business.categories.forEach((category) => {
//             if(!catObj.categories.find(catObjCat => catObjCat === category )) {
//               catObj.categories.push(category);
//             }
//           })
//         })
//       }).catch(err => console.error(err));
//   })
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

const allCategories = fs.readFile(file1, 'utf8').then(string => JSON.parse(string));
const allBusinesses = fs.readFile(file2, 'utf8').then(string => JSON.parse(string));

return Promise.all([allCategories, allBusinesses])
  .then((result) => {
    const allCats = result[0];
    const allBusinesses = result[1];

    allBusinesses.businesses.forEach((business) => {
      business.categories.forEach((category) => {
        if(!allCats.categories.includes(category)) {
          allCats.categories.push(category);
        }
      })
    });
    allCats.categories.sort();
    return JSON.stringify(allCats);
  })
  .then(result => fs.writeFile(file1, result))
  .catch(err => console.error(err));


