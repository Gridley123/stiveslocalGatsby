const fs = require('fs');
const path = require('path');
const slugCreator = require('slug');
const omit = require('lodash/omit');

module.exports = function(node) {
  console.log(node);
  const nodeCopy = Object.assign(node.frontmatter);
  const re = /\s*,\s*/;
  const catSplit = nodeCopy.categories.split(re);
  nodeCopy.categories = catSplit.map(cat => cat.replace(/&amp;/g, '&'));
  const json = JSON.stringify(nodeCopy);
  console.log(json);

  const writePath = path.resolve('./src/local-business-directory/businesses');
  fs.writeFileSync(`${writePath}/${slugCreator(node.frontmatter.company_name, {lower: true})}.json`, json);
};