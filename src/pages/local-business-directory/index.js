import React, {Component} from 'react';

import styled from 'styled-components';
import CentredDiv from '../../components/CenteredDiv';
import {Grid} from 'react-flexbox-grid';
import Listing from './Listing'

class LocalBusinessDirectory extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const Wrapper = styled.div`
    margin: 150px 20px 20px;
  `;


    console.log(this.props.data);
    const edges = this.props.data.allBusinessesJson.edges;
    const links = edges.map((link) => {
      return (
        <Listing key={link.node.id} data={link.node}/>
      )
    });
    return (

      <Wrapper>
        <CentredDiv>
          <h1>
            St Ives & Surrounding Area Local Business Directory
          </h1>
        </CentredDiv>
        <Grid fluid>
          {links}
        </Grid>
      </Wrapper>
    );
  }
}


export default LocalBusinessDirectory;


// const PublishedIssues = ({ data }) => {
//   console.log(data);
//   const edges = data.allMarkdownRemark.edges;
//   console.log(edges);
//   const listItems = edges.map((edge) => {
//     console.log('Path Prefis: ' + __PATH_PREFIX__);
//     const imageURL = __PATH_PREFIX__ + edge.node.frontmatter.imageURL;
//     return (
//       <div key={edge.node.id}>
//         <Link to={edge.node.fields.slug}>
//           <div>
//             <Image src={imageURL}/>
//           </div>
//           <HoverOverlay>
//             <HoverLink>
//               {edge.node.frontmatter.title}
//             </HoverLink>
//           </HoverOverlay>
//         </ Link>
//       </div>
//     )
//   });
//
//   return (
//     <Wrapper>
//       <Grid style={{ marginTop: '150px', textAlign: 'center' }}
//             component="div"
//             columns={20}
//             columnWidth={columnWidth}
//             gutterWidth={20}
//             gutterHeight={20}
//             itemHeight={itemHeight}
//             springConfig={{ stiffness: 170, damping: 26 }}
//       >
//         {listItems}
//
//       </Grid>
//     </Wrapper>
//   )
// };

export const businessDirectory = graphql`
    query allBusinessDirectory {
        allBusinessesJson(filter: {id: {regex: "/local-business-directory/"}} sort: {fields: [company_name], order: ASC}) {
            edges {
                node {
                    fields {
                        slug
                    }

                    categories
                    company_name

                }
            }
        }}
`;



