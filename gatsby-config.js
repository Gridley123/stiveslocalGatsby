module.exports = {

  pathPrefix: `/`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [{
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `y0b96oybzoi1`,
      accessToken: `a276b203cbeb6a4e43e3ba20d0aecd6d16b37dc37ffab567c4b1ff101ba55569`,
    },
  }, 'gatsby-transformer-json', 'gatsby-transformer-excel', 'gatsby-transformer-sharp', 'gatsby-plugin-sharp', `gatsby-plugin-react-helmet`, 'gatsby-transformer-remark', `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              // Remove the default behavior of adding a link to each
              // image.
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
              // Remove the default behavior of adding a link to each
              // image.
            },
          },
        ]
      }
    }
  ],
};
