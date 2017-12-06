import React from 'react'
import LocalBusinessDirectory from '../components/LocalBusinessDirectory/'

export default ({ data }) => {
  return (
    <div>
      <LocalBusinessDirectory data={data}/>
    </div>
  );
}

export const businessDirectory = graphql`
    query allBusinessDirectory {
        allBusiness: allContentfulBusiness(sort: {fields: [company_name]}) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    categories {
                        name
                    }
                    company_name
                    home_phone
                    email
                    facebook_url
                    instagram_url
                    website_url
                    detail {
                        detail
                    }
                    image {
                        id
                        sizes {
                            base64
                            aspectRatio
                            src
                            srcSet
                            sizes
                        }
                    }
                    home_address_line_1
                    town
                    postcode
                    twitter_url
                    mobile_phone
                    home_address_line_2
                    contact_first_name
                    contact_last_name
                }
            }
        }
        categories: allContentfulCategories(sort: {fields: [name]}) {
            edges {
                node {
                    name
                }
            }
        }
    }

`;