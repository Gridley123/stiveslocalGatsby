import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-flexbox-grid';
import Link from '../../components/Link';

const Para = styled.a`
margin-bottom: 0;
`;

const LinkSmaller = styled(Link)`
font-size: 14px;
`;

export default (props) =>  {

  const advertiserData = props.advertiserData;

  const detail = advertiserData.detail ? advertiserData.detail.detail : null;
  console.log(detail);
  const detailTrimmed = detail ? detail.replace(/\s{2,}/, " ") : null;

  return (
    <div>
      <Row>
        <Col xs={6}>
          {detail ? <Para><strong>Detail:</strong></Para> : null}
        </Col>
        <Col xs={6}>
          <div>
            {detail ? <Para>{detailTrimmed}<br/></Para> : null}
          </div>
        </Col>
      </Row>
    </div>
  );
};
