import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-flexbox-grid';
import Link from '../../components/Link';

const Para = styled.a`
margin-bottom: 0;
`;

const LinkSmaller = styled(Link)`
font-size: 14px;
`

export default (props) =>  {

  const advertiserData = props.advertiserData;

  const website = advertiserData.website_url ? encodeURI(advertiserData.website_url) : null;

  return (
    <div>
      <Row>
        <Col xs={6}>
          {website ? <Para><strong>Website:</strong></Para> : null}
        </Col>
        <Col xs={6}>
          <div>
            {website ? <LinkSmaller href={website}>{website}<br/></LinkSmaller> : null}
          </div>
        </Col>
      </Row>
    </div>
  );
};
