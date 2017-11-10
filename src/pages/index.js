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
    }
`;


