import React from 'react'
import HomePage from '../components/HomePage/'

export default ({data}) => {
  console.log(data);
  return(
  <div>
    <HomePage data={data}/>
  </div>
  );
}


export const publishedPosts = graphql`
    query images {
        landingPageImgSize: file(relativePath: { regex: "/St-Ives-Local-Cover-Tunnel-With-Logo.png/"}) {
            childImageSharp {
                # Specify the image processing steps right in the query
                # Makes it trivial to update as your page's design changes.
                sizes(maxWidth: 2400) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
        limitedIssues: allContentfulPublishedIssue(limit:3, sort: {fields: [issue_date], order: DESC}) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    title
                    pubURL
                    issue_date
                    pubURL
                    image {
                        resolutions(width: 300) {
                            base64
                            aspectRatio
                            width
                            height
                            src
                            srcSet
                        }
                    }
                }
            }
        }
    }
`;


