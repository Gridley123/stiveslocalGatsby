import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {TypographyStyle} from 'react-typography'
import typography from '../utils/typography'
import Header from '../components/Header/';
import Footer from '../components/Footer/'


class TemplateWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      headerHeight: '117.594',
      opacityPercent: '0',
    };
    this.updateHeaderHeight = this.updateHeaderHeight.bind(this);
    this.addListener = this.addListener.bind(this);
    this.controlListener = this.controlListener.bind(this);
    this.removeListener = this.removeListener.bind(this);
    this.setOpacityToScroll = this.setOpacityToScroll.bind(this);
    this.setOpacityToFull = this.setOpacityToFull.bind(this);
    this.setOpacityToNone = this.setOpacityToNone.bind(this);
  }

  componentDidMount() {
    this.controlListener();
  }

  componentWillReceiveProps(nextProps) {
    this.controlListener(nextProps);
  }

  componentWillUnmount() {
    this.removeListener();
  }

  controlListener(nextProps) {
    if (nextProps && nextProps.location.pathname === '/') {
      this.setOpacityToScroll();
      this.addListener();
    } else {
      this.removeListener();
      this.setOpacityToFull();
    }
  }

  setOpacityToScroll() {
    console.log(this.state.headerHeight, window.scrollY)
    const opacityPercent = 1 - ((this.state.headerHeight - window.scrollY) / this.state.headerHeight);
    console.log(opacityPercent);
    if (opacityPercent >= 0) {
      if (opacityPercent >= 0) {
        this.setState({
          opacityPercent,
        });
      }
    }
  }

  setOpacityToFull() {
    this.setState({
      opacityPercent: '1'
    })
  }

  setOpacityToNone() {
    this.setState({
      opacityPercent: '0'
    })
  }

  addListener() {
    this.opacityScrollListener = this.setOpacityToScroll;
    window.addEventListener('scroll', this.opacityScrollListener);
  }

  removeListener() {
    window.removeEventListener('scroll', this.opacityScrollListener);
  }


  updateHeaderHeight() {
    this.setState({
      headerHeight: this.header.clientHeight,
    })
  }

  render() {
    const children = this.props.children;
    return (
      <div>
        <Helmet
          title="St Ives Local"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          script={[{
            "type": "application/javascript", "defer": true, innerHTML: `(function(d, s, id) {
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
        </Helmet>
        <TypographyStyle typography={typography}/>
        <div id="fb-root"></div>
        <Header opacityPercent={this.state.opacityPercent} ref={(header) => {
          this.header = header;
        }} className={"header"}/>
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
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
