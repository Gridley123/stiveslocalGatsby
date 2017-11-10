import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-flexbox-grid';
import Link from '../../components/Link';

const Para = styled.a`
margin-bottom: 0;
`;

const LinkSmaller = styled(Link)`
font-size: 16px;
`

export default (props) =>  {

  const advertiserData = props.advertiserData;

  const email =
    advertiserData.email || null;

  return (
    <div>
      <Row>
        <Col xs={6}>
          {email ? <Para><strong>Email:</strong></Para> : null}
        </Col>
        <Col xs={6}>
          <div>
            {email ? <LinkSmaller href={`mailto:${email}`}>{email}<br/></LinkSmaller> : null}
          </div>
        </Col>
      </Row>
    </div>
  );
};
