import React, {Component} from 'react';
import styled from 'styled-components'
import greyBackground from '../../images/greyBackground.png';
import {FaFacebook} from 'react-icons/lib/fa';



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
`;


class FacebookEmbed extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    console.log('componentDidMount()');
    (function(d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10&appId=157512371329819";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps()' + nextProps);
    console.log(this.props.location);

  }

  render() {
    console.log('render');
    return (
      <div>
        <div className="fb-page" data-href="https://www.facebook.com/stiveslocal"
             data-tabs="timeline, messages" data-small-header="true"
             data-adapt-container-width="true"
             data-hide-cover="true" data-show-facepile="false">
          <blockquote cite="https://www.facebook.com/stiveslocal" className="fb-xfbml-parse-ignore">
            <a
              href="https://www.facebook.com/stiveslocal">St. Ives Local</a></blockquote>
        </div>
      </div>
    );
  }
}


export default class Example extends Component {
  render() {
    return (
      <FacebookContainer>
        <Title>
          <FaFacebook style={{ marginRight: '10px' }}/>
          St Ives Local Facebook Feed
        </Title>
        <FacebookEmbed/>
        {/*<FacebookProvider appId="157512371329819">*/}
        {/*<Page href="https://www.facebook.com/st-ives-local" tabs="timeline" small-header*/}
        {/*hide-cover show-facepile/>*/}
        {/*</FacebookProvider>*/}
      </FacebookContainer>
    );
  }
}