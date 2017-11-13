import React, {Component} from 'react';

import CentredDiv from '../../components/CenteredDiv';
import {Col, Grid, Row} from 'react-flexbox-grid';
import Listing from './Listing';
import Filter from './Filter';
import mapValues from 'lodash/mapvalues'
import every from 'lodash/every';
import values from 'lodash/values';

class LocalBusinessDirectory extends Component {
  constructor(props, context) {
    super(props, context);
    this.categories = this.props.data.categories;
    this.initialFilterState = {};
    this.categories.edges.forEach((edge) => {
      this.initialFilterState[edge.node.id] = true;
    });

    this.state = {
      visibility_filter: this.initialFilterState,
    };
    this.toggleCategoryFilter = this.toggleCategoryFilter.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.deselectAll = this.deselectAll.bind(this);
    this.filterBusinesses = this.filterBusinesses.bind(this);
  }

  filterBusinesses() {
    const visibility_filter = this.state.visibility_filter;
    const all = this.props.data.allLocalBusinessDirectoryJson.edges;
    const filtered = all.filter((edge) => {
      const checked =  edge.node.childrenCategory.some((category) => {
        return visibility_filter[category.id] === true;
      });
      return checked;
    });
    return filtered;
  }

  selectAll() {
    this.setState((prevState) => {
      const newObj = mapValues(prevState.visibility_filter, () => true);
      return {
        visibility_filter: newObj,
      }
    });
  }

  deselectAll() {
    this.setState((prevState) => {
      const newObj = mapValues(prevState.visibility_filter, () => false);
      return {
        visibility_filter: newObj,
      }
    });
  }

  toggleCategoryFilter(e) {
    const node = e.target.name;
    this.setState((prevState) => {
      const newVisFilter = Object.assign(prevState.visibility_filter);
      newVisFilter[node] = !newVisFilter[node];
      return {
        visibility_filter: newVisFilter,
      }
    })
  }

  render() {
    console.log(this.filterBusinesses());
    const allSet = every(values(this.state.visibility_filter), function (v) {
      return v;
    });
    const noneSet = every(values(this.state.visibility_filter), function (v) {
      return !v;
    });
    const edges = this.props.data.allLocalBusinessDirectoryJson.edges;

    const links = this.filterBusinesses().map((edge) => {
      return (
        <Listing key={edge.node.id} data={edge.node}/>
      )
    });

    return (
      <div style={{ margin: '150px 20px 20px' }}>
        <CentredDiv>
          <h1>
            St Ives & Surrounding Area Local Business Directory
          </h1>
        </CentredDiv>
        <Grid fluid>
          <Row>
            <Col xs={6}>
              {links}
            </Col>
            <Col xs={6}>
              <Filter visibility_filter={this.state.visibility_filter} allSet={allSet}
                      noneSet={noneSet} selectAll={this.selectAll} deselectAll={this.deselectAll}
                      toggleCategoryFilter={this.toggleCategoryFilter}
                      data={this.props.data.categories}/>
            </Col>
          </Row>
        </Grid>

      </div>
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



