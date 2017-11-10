import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-flexbox-grid';
import Link from '../../components/Link';
import {FaFacebookSquare, FaTwitterSquare, FaInstagram} from 'react-icons/lib/fa'

const Para = styled.a`
margin-bottom: 0;
`;

const LinkSmaller = styled(Link)`
font-size: 24px;
display: inline-block;
margin-right: 10px;
`;

export default (props) =>  {

  const advertiserData = props.advertiserData;

  const fb = advertiserData.facebook_url ? encodeURI(advertiserData.facebook_url) : null;

  const twitter = advertiserData.twitter_url ? encodeURI(advertiserData.twitter_url) : null;

  const insta = advertiserData.instagram_url ? encodeURI(advertiserData.instagram_url) : null;

  return (
    <div>
      <Row>
        <Col xs={6}>
          {(fb || twitter || insta) ? <Para><strong>Social Media Links:</strong></Para> : null}
        </Col>
        <Col xs={6}>
          <div>
            {fb ? <LinkSmaller href={fb}><FaFacebookSquare/><br/></LinkSmaller> : null}
            {twitter ? <LinkSmaller href={twitter}><FaTwitterSquare/><br/></LinkSmaller> : null}
            {insta ? <LinkSmaller href={insta}><FaInstagram/><br/></LinkSmaller> : null}
          </div>
        </Col>
      </Row>
    </div>
  );
};
