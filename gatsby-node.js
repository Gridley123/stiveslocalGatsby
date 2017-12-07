const path = require('path');
const fs = require('fs');
const slugCreator = require('slug');
const rp = require('request-promise');
const jsonWriter = require('./gatsby-node-json-writer');
const dropRight = require('lodash/dropRight');
const mapAddressCreator = require('./map-address-creator');


exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField, createNode } = boundActionCreators;


  // if (node.internal.type === `MarkdownRemark`) {
  //   try {
  //     const fileNode = getNode(node.parent);
  //     const parsedFilePath = path.parse(fileNode.relativePath);
  //     if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
  //       slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
  //     } else if (parsedFilePath.dir === ``) {
  //       slug = `/${parsedFilePath.name}/`
  //     } else {
  //       slug = `/${parsedFilePath.dir}/`
  //     }
  //     // Add slug as a field on the node.
  //     createNodeField({ node, name: `slug`, value: slug })
  //   } catch (err) {
  //     console.error(err);
  //   }
  //
  // }

  if (node.internal.type === "ContentfulBusiness") {
    const nodeName = node.company_name;
    const slug = `/local-business-directory/${slugCreator(nodeName, { lower: true })}`;
    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug })
  }

  if (node.internal.type === "ContentfulPublishedIssue") {
    const nodeName = node.title;
    const slug = `/published-issues/${slugCreator(nodeName, { lower: true })}`;
    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug })
  }
}
;


exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const publishedIssuePage = path.resolve("src/templates/published-issue.js");
    const advertiserPage = path.resolve("src/templates/advertiser/index.js");
    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
         {
              advertisers: allContentfulBusiness {
                edges {
                  node {
                    id
                    fields {
                      slug
                    }
                  }
                }
              }
              published_issues: allContentfulPublishedIssue{
                edges {
                  node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
            }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors)
        }

        // Create blog posts pages.
        result.data.published_issues.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug, // required
            component: publishedIssuePage,
            context: {
              slug: edge.node.fields.slug,
            },
          })
        });

        result.data.advertisers.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug, // required
            component: advertiserPage,
            context: {
              slug: edge.node.fields.slug,
            },
          })
        });
        resolve();
      })
    )
  })
};