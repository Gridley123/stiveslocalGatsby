    const path = require('path');
    const fs = require('fs');
    const slugCreator = require('slug');
    const rp = require('request-promise');
    const jsonWriter = require('./gatsby-node-json-writer');
    const dropRight = require('lodash/dropRight');


    exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {

      const { createNodeField, createNode } = boundActionCreators;
      const pathRegEx = /\/local-business-directory\//;
      let slug;
      // if(node.internal.type==='MarkdownRemark' && pathRegEx.test(node.id)){
      //   jsonWriter(node);
      // }

      if (node.internal.type === `AllDataJson`) {
        //place jsonWriter (with parameter of'node') here

        const { businesses } = node;
        businesses.forEach((business) => {
          business.id = slugCreator(business.company_name, { lower: true });
          business.parent = " ";
          business.children = [];
          business.internal = {};
          business.internal.contentDigest = business.company_name;
          business.internal.type = "Business";
          business.image = `${business.image}`;
          createNode(
            business
          )
        })


      }

      if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent);
        const parsedFilePath = path.parse(fileNode.relativePath);
        if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
          slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
        } else if (parsedFilePath.dir === ``) {
          slug = `/${parsedFilePath.name}/`
        } else {
          slug = `/${parsedFilePath.dir}/`
        }
        // Add slug as a field on the node.
        createNodeField({ node, name: `slug`, value: slug })
      }

      if (node.internal.type === "Business") {
        const nodeName = node.company_name;
        const slug = `/local-business-directory/${slugCreator(nodeName, { lower: true })}`;
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
              advertisers: allBusiness {
                edges {
                  node {
                    id
                    image
                    fields {
                      slug
                    }
                  }
                }
              }
              published_issues: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/published-issues/"}}) {
                edges {
                  node {
                  id
                    fields {
                      slug
                    }
                    frontmatter {
                      imageURL
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
              console.log(edge);
              const imageURLRegex = `/${edge.node.frontmatter.imageURL}/g`;
              createPage({
                path: edge.node.fields.slug, // required
                component: publishedIssuePage,
                context: {
                  slug: edge.node.fields.slug,
                  imageURLRegex,
                },
              })
            });

            result.data.advertisers.edges.forEach(edge => {
              const imageURLRegex = `/${edge.node.image}/`;
              createPage({
                path: edge.node.fields.slug, // required
                component: advertiserPage,
                context: {
                  slug: edge.node.fields.slug,
                  imageURLRegex
                },
              })
            });
            resolve();
          })
        )
      })
    };