import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {TypographyStyle} from 'react-typography'
import typography from '../utils/typography'
import Header from '../components/Header/';
import Footer from '../components/Footer/'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="St Ives Local"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      script={[{
        "type": "application/javascript", "defer":true, innerHTML: `(function(d, s, id) {
        let js;
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10&appId=157512371329819";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'))`
      }, {
        "type": "text/javascript", "defer": true, src: '//e.issuu.com/embed.js'
      }]}
    >

      <TypographyStyle typography={typography}/>
    </Helmet>
    <div id="fb-root"></div>
    <Header className={"header"}/>
    <div className="pageWrapper"
         style={{

           // margin: '0 auto',
           // maxWidth: 960,
           // padding: '0px 1.0875rem 1.45rem',
           // paddingTop: 0,
         }}
    >
      {children()}
    </div>
    <Footer className="footer"/>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
