const path = require('path');
const fs = require('fs');
const slugCreator = require('slug');
const rp = require('request-promise');
const jsonWriter = require('./gatsby-node-json-writer');


exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField, createNode } = boundActionCreators;
  const pathRegEx = /\/local-business-directory\//;
  let slug;
  // if(node.internal.type==='MarkdownRemark' && pathRegEx.test(node.id)){
  //   jsonWriter(node);
  // }
  if (node.internal.type === `MarkdownRemark` || node.internal.type === "LocalBusinessDirectoryJson") {
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

  if (node.internal.type === `LocalBusinessDirectoryJson` && pathRegEx.test(node.id)) {
    //place jsonWriter (with parameter of'node') here
    console.log("found");
    const fm = node;
    const homeAddress1 =
      fm.home_address_line_1 || null;

    const homeAddress2 =
      fm.home_address_line_2 || null;

    const town =
      fm.town || null;

    const postcode =
      fm.postcode || null;
    const googleMapsAPIKey = "AIzaSyC1Cro1joS6Pqm0kx6vw4Z0yd1ajsODBuI";
    const mapURL = `https://www.google.com/maps/api/geocode/json?key=${googleMapsAPIKey}&address=${encodeURI(homeAddress1 || "")},${encodeURI(homeAddress2 || "")},${encodeURI(town || "")},${encodeURI(postcode || "")}`;

    const categories = node.categories;
    categories.forEach((category) => {
      console.log(category);
      const id = `advertiser_category_${category.replace(" ", "")}`;
      createNode({
        name: category,
        id,
        parent: " ",
        children: [],
        internal: {
          type: 'category',
          contentDigest: category,
        }
      })
      node.children.push(id);
    });

    return new Promise((resolve) => {
      rp(mapURL).then(function (response) {
        const json = JSON.parse(response);
        if (json.status === "OK") {
          const formattedAddress = json.results[0].formatted_address;
          const location = json.results[0].location;
          createNodeField({ node, name: `location`, value: location });
          createNodeField({ node, name: `formatted_address`, value: formattedAddress });
        } else {
          console.error(`Query of Google Maps Geocoding API has failed: ${json.status}`);
        }

        resolve();
      }).catch((err) => {
        console.error(err)
      });
    });


  } else {
    return;
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
            advertisers: allLocalBusinessDirectoryJson(filter: {id: {regex: "/local-business-directory/"}}) {
            edges {
              node {
              id
                fields {
                  slug
                  formatted_address
                }
                
                  categories
                  company_name
                  home_phone
                  email
                  facebook_url
                  instagram_url
                  website_url
                  detail
                  photo_url
                  home_address_line_1
                  home_address_line_2
                  town
                  postcode
                  latitude
                  longitude
                  twitter_url
                  mobile_phone
                  contact_first_name
                  contact_last_name
                  image
              
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

        return
      })
    )
  })
};