import React from 'react';
import {Col, Grid, Row} from 'react-flexbox-grid';
import styled from 'styled-components';
import Link from '../../components/Link';

const SmallerLink = styled(Link)`
      font-size: 16px;
`

function Listing(props) {
  return (
    <Row>
      <Col xs={9} xsOffset={3}>
        <SmallerLink href={props.data.fields.slug}>{props.data.company_name}</SmallerLink>
      </Col>
    </Row>
  );
}

export default Listing;

