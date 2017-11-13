import React from 'react'
import LocalBusinessDirectory from '../components/LocalBusinessDirectory/'

export default ({data}) => {
  return(
    <div>
      <LocalBusinessDirectory data={data} />
    </div>
  );
}

export const businessDirectory = graphql`
    query allBusinessDirectory {
        allLocalBusinessDirectoryJson(filter: {id: {regex: "/local-business-directory/"}} sort: {fields: [company_name], order: ASC}) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    childrenCategory {
                        id
                    }
                    categories
                    company_name

                }
            }
        }
        categories: allCategory(sort: {fields: [name], order: ASC}) {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }

`;