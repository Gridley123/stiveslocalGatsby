import React from 'react';
import styled from 'styled-components'
import Menu from './Menu.js'
import Social from '../Social'
import linksArray from '../../utils/links'

const Footer = styled.footer`
height:auto;
display: block;
padding: 10px 0;
font-size: 10px;
text-align: center;
color: #7a7a7a;
position: relative;
border-top: 1px solid #d4d4d4;
background-color: #fff;
box-shadow: 0 -0.125em 0.25em 0 rgba(0,0,0,0.075);
`

const Container = styled.div`
display: block;
max-width: 1500px;
width: 90%;
margin: 0 auto;
`

const Webmaster = styled.div`
margin: 30px 0 10px;
font-weight: 400;
letter-spacing: 2px;
line-height: 1.3;
`

const WebmasterContent = styled.p`
margin: 0 0 1.313em;
`

const WebmasterLink = styled.a`
text-decoration: none;
background-color: transparent;
transition: color 0.3s ease,background-color 0.3s ease,border-color 0.3s ease,box-shadow 0.3s ease;
`


export default (props) =>
  <Footer>
    <Container>
      <Menu links = {linksArray} />
      <Social />
      <Webmaster>
        <WebmasterContent>
          WEBMASTER:
          <WebmasterLink href={"mailto: Gridley123@hotmail.com"}>
            GRIDLEY123@HOTMAIL.COM
          </WebmasterLink>
        </WebmasterContent>
      </Webmaster>
    </Container>
  </Footer>






