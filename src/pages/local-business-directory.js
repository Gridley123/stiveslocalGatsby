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
        allBusiness(sort: {fields: [company_name]}) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    categories
                    company_name
                    home_phone
                    email
                    facebook_url
                    instagram_url
                    website_url
                    detail
                    image
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
        categories: allCategoriesJson {
            edges {
                node {
                    id
                    categories
                }
            }
        }
    }

`;