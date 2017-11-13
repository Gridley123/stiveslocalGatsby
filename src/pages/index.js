import React from 'react'
import HomePage from '../components/HomePage/'

export default ({data}) => {
  return(
  <div>
    <HomePage data={data}/>
  </div>
  );
}


export const publishedPosts = graphql`
    query images {
        landingPageImgSize: file(relativePath: { regex: "/St-Ives-Local-Cover-Tunnel-With-Logo.png/g"}) {
            childImageSharp {
                id
                # Specify the image processing steps right in the query
                # Makes it trivial to update as your page's design changes.
                sizes(
                    maxWidth:2400
                ) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
        limitedIssues: allMarkdownRemark(limit:3, filter: {fileAbsolutePath: {regex: "/published-issues/"}} sort: {fields: [frontmatter___issue_date], order: DESC}) {
            edges {
                node {
                    id
                    html
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        embed_code
                        issue_date
                        pubURL
                        imageURL
                        _PARENT
                        parent
                    }
                }
            }
        }
    }
`;


