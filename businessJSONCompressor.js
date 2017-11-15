const fs = require('mz/fs');
const path = require('path');
const omit = require('lodash/omit');
const dir = path.resolve('./src/local-business-directory');

const getAllFileNames = (dir) => {
  return fs.readdir(dir);
};

const getOnlyJsonFileNames = (fileNames) => {
  const jsonOnly = fileNames.filter((fileName) => {
    return fileName.includes('.json');
  });
  return Promise.resolve(jsonOnly);
};

const getFileDataString = (dir, fileName) => {
  const filePath = path.join(dir, fileName);
  return fs.readFile(filePath, 'utf8');
};

const getAllFileDataStrings = (fileNames) => {
  const promises = [];
  fileNames.forEach((fileName) => {
    const obj = getFileDataString(dir, fileName).then((string) => {
      return Promise.resolve(JSON.parse(string));
    });
    promises.push(getFileDataString(dir, fileName).catch((err) => console.error(err)));
  });
  return Promise.all(promises);
};

const parseAll = (stringArray) => {
  const obj = {
    businesses: [],
  }
  stringArray.forEach((string) => {
    const business = JSON.parse(string);
    console.log(business);
    obj.businesses.push(business);
  });
  return Promise.resolve(obj);
}

const parse = (string) => {
  return Promise.resolve(JSON.parse(string));
};

const createObjectString = (allFileDataStringsArray) => {
  const string = `{"businesses": [${allFileDataStringsArray}]}`
  Promise.resolve(allFileDataStringsArray);
};

const createObject = (dataArray) => {
  const businesses = dataArray.map((businessObj) => {
    return omit(businessObj, ['_PARENT', 'parent', 'photo_url', 'title', 'latitude', 'longitude']);
  });
  return Promise.resolve({
    businesses,
  })
};

const writeToFile = (result) => {
  const fileName = path.join(dir, 'result.json');
  return fs.writeFile(fileName, JSON.stringify(result));
};

const getResult = (dir, fileName) => {
  return fs.readFile(path.join(dir, fileName), 'utf8');
}


// getAllFileNames(dir)
//   .then((dir) => getOnlyJsonFileNames(dir))
//   .then((fileNames) => getAllFileDataStrings(fileNames))
//   .then((result) => {}).catch((err) => console.error(err));


// .then((string) => parse(string))
// .then((dataArray) => createObject(dataArray))
// .then((result) => writeToFile(result))
const promises = [];
const object = {
  businesses: [],
};

const fileProcess = (fileName) => {
  const promise = fs.readFile(path.join(dir, fileName), 'utf8')
    .then((string) => {
    try {
      return Promise.resolve(JSON.parse(string));
    } catch (err) {
      console.log(err + '\n' + fileName);
    }
  })
    .then((obj) => Promise.resolve(omit(obj, ['_PARENT', 'parent', 'photo_url', 'title', 'latitude', 'longitude'])))
    .then((obj) => object.businesses.push(obj))
    .catch((err) => console.error(err));
  promises.push(
    promise
  )
};


fs.readdir(dir)
  .then((fileNameArray) => getOnlyJsonFileNames(fileNameArray))
  .then((fileNameArray) => {
    fileNameArray.forEach(fileProcess);
    return Promise.all(promises);
  })
  .then(() => fs.writeFile(path.join(dir, 'all-businesses.json'), JSON.stringify(object)))
  .catch(err => console.error(err));










