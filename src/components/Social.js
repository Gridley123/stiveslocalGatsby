import React from 'react';
import styled from 'styled-components'
import {FaFacebookSquare} from 'react-icons/lib/fa'

const SocialMediaLinks = styled.div`
margin-top: 10px;
transform: translate3d(0,0,0);
font-weight: 100;
line-height: 1;
display: block;
${props => props.topbar && `
  float: right;
  margin-top: 10px;
  transform: translate3d(0,0,0);
`}
`;

const SocialMediaLink = styled.a`
margin-left: 7px;
font-size: 24px;
display: inline-block;
text-align: center;
color: #8599a8;
background-color: transparent;
transition: color 0.3s ease,background-color 0.3s ease,border-color 0.3s ease,box-shadow 0.3s ease;
`;

export default (props) =>
  <SocialMediaLinks topbar = {props.topbar}>
    <SocialMediaLink href='https://www.facebook.com/stiveslocal/'>
      <FaFacebookSquare/>
    </SocialMediaLink>
  </SocialMediaLinks>