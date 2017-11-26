import React, {Component} from 'react';
import styled from 'styled-components'
import greyBackground from '../../images/greyBackground.png';
import Link from '../Link';
import {FaFacebook} from 'react-icons/lib/fa'


const FacebookContainer = styled.div`
height:530px;
width: 100%;
text-align: center;
background: url(${greyBackground}) top center repeat;
padding: 30px;
`;

const Title = styled.h1`
  color: #3b5998;
  line-height: 1.3;
  letter-spacing: -0.029em;
  text-rendering: optimizelegibility;
  font-weight:300;
`
export default class Example extends Component {
  render() {
    return (
      <FacebookContainer>
        <Title>
          <FaFacebook style={{marginRight: '10px'}}/>
          St Ives Local Facebook Feed
        </Title>
        {/*<FacebookProvider appId="157512371329819">*/}
          {/*<Page href="https://www.facebook.com/st-ives-local" tabs="timeline" small-header hide-cover show-facepile/>*/}
        {/*</FacebookProvider>*/}
      </FacebookContainer>
    );
  }
}