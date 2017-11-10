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

    const mobile =
      advertiserData.mobile_phone || null;

    const home =
      advertiserData.home_phone || null;

   const mobileTrimmed = mobile ? mobile.replace(" ", "") : null;

   const homeTrimmed = home ? home.replace(" ", "") : null;

    return (
      <div>
        <Row>
          <Col xs={6}>
            {(mobile || home) ? <Para><strong>Telephone:</strong></Para> : null}
          </Col>
          <Col xs={6}>
            <div>
              {mobile ? <LinkSmaller href={`tel:${mobileTrimmed}`}>{mobile}<br/></LinkSmaller> : null}
              {home ? <LinkSmaller href={`tel:${homeTrimmed}`}>{home}<br/></LinkSmaller> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
};
