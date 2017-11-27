import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-flexbox-grid';
import Link from '../../components/Link';

const Para = styled.a`
margin-bottom: 0;
`;

const LinkSmaller = styled(Link)`
font-size: 16px;
`;

export default (props) =>  {

  const advertiserData = props.advertiserData;

  const firstName =
    advertiserData.contact_first_name || null;

  const lastName =
    advertiserData.contact_last_name || null;

  return (
    <div>
      <Row>
        <Col xs={6}>
          {(firstName || lastName) ? <Para><strong>Contact Name:</strong></Para> : null}
        </Col>
        <Col xs={6}>
          <div>
            <Para>
            {firstName ? <span>{firstName} </span> : null}
            {lastName ? <span>{lastName}</span>: null}
            <br />
            </Para>
          </div>
        </Col>
      </Row>
    </div>
  );
};
