import React, {Component} from 'react';

import CentredDiv from '../CenteredDiv';
import {Col, Grid, Row} from 'react-flexbox-grid';
import Listing from './Listing';
import Filter from './Filter';
import mapValues from 'lodash/mapvalues'
import every from 'lodash/every';
import values from 'lodash/values';

class LocalBusinessDirectory extends Component {
  constructor(props, context) {
    super(props, context);
    this.categories = this.props.data.categories.edges[0].node.categories;
    this.initialFilterState = {};
    this.categories.forEach((category) => {
      this.initialFilterState[category] = true;
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
    const allBusinesses = this.props.data.allBusiness.edges;
    return allBusinesses.filter((edge) => {
      return edge.node.categories.some((category) => {
        return visibility_filter[category] === true;
      });
    });
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
    const allSet = every(values(this.state.visibility_filter), function (v) {
      return v;
    });
    const noneSet = every(values(this.state.visibility_filter), function (v) {
      return !v;
    });

    const links = this.filterBusinesses().map((business) => {
      return (
        <Listing key={business.node.company_name} data={business}/>
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




