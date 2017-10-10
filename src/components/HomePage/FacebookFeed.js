import React, {Component} from 'react';
import {Page} from 'react-facebook';
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
        <div className="fb-page" data-href="https://www.facebook.com/st-ives-local" data-tabs="timeline"
             data-width="500" data-height="400" data-small-header="true"
             data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/st-ives-local" className="fb-xfbml-parse-ignore"><Link
            href="https://www.facebook.com/st-ives-local">St. Ives Local Facebook Page</Link></blockquote>
        </div>
        <div style={{ height: '500px' }}>
        </div>
      </FacebookContainer>
    );
  }
}