const fs = require('fs');
const slugCreator = require('slug');

module.exports = function () {
  if (node.internal.type === `AdvertisorsDirectoryDataXlsx__CnExportAll10092017`) {
    const nodeCopy = Object.assign(node);
    const categories = nodeCopy.categories;
    const re = /\s*,\s*/;
    const catSplit = categories.split(re);
    const categoriesTrimmed = catSplit.map(cat => cat.replace(/&amp;/g, '&'));
    nodeCopy.image = `${slugCreator(node.company_name, {lower:true})}.png`;
    delete nodeCopy.ID;
    let string = '---\n\n';
    for (const prop in nodeCopy) {
      if (nodeCopy.hasOwnProperty(prop)) {
        if (prop != "id" && prop != "children" && prop != "parent" && prop != "internal" && prop!= "categories") {
          const subString = `${prop}: "${nodeCopy[prop]}"\n`;
          string = string + subString;
        } else if (prop=="categories"){
          const subString = `categories:\n${categoriesTrimmed.forEach((cat=> `- ${cat}`))}`;
          console.log(subString);
          string = string + subString;
        }
      }
    }
    string += '\n---\n';
    const filePath = `${path.resolve('./src/advertisers/')}/${slugCreator(node.company_name, {lower:true})}.md`;
    console.log(filePath);
    fs.writeFile(filePath, string, (err) => {
      console.log(`${filePath} written`);
      console.log(err);
    })
  }
};