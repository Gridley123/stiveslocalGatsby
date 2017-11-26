import React from 'react';
import {Col, Grid, Row} from 'react-flexbox-grid';
import styled from 'styled-components';
import {GLink} from '../Link';

const SmallerLink = styled(GLink)`
      font-size: 16px;
`

function Listing(props) {
  return (
    <Row>
      <Col xs={9} xsOffset={3}>
        <SmallerLink to={props.data.node.fields.slug}>{props.data.node.company_name}</SmallerLink>
      </Col>
    </Row>
  );
}

export default Listing;

