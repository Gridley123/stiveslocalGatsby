import React from 'react';
import styled from 'styled-components'
import TopBar from './TopBar'
import Navbar from './Navbar'

const HeaderWrap = styled.header`
      position: fixed;
      z-index: 9999;
      width: 100%;
      background: transparent;
      display: block;
      top:0; 
    `;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerHeight: '0',
      opacityPercent: '0',
      scrollListenerAdded: false,
    };
    this.updateOpacityPercent = this.updateOpacityPercent.bind(this);
    this.updateHeaderHeight = this.updateHeaderHeight.bind(this);
    this.addListener = this.addListener.bind(this);
  }

  componentDidMount() {
    this.addListener();
  }

  addListener() {
    this.updateHeaderHeight();
    window.addEventListener('scroll', this.updateOpacityPercent.bind(this));
    this.setState({ opacityPercent: '0', scrollListenerAdded: true })
  }

  updateOpacityPercent() {
    if (window.location.pathname === '/') {
      const opacityPercent = 1 - ((this.state.headerHeight - window.scrollY) / this.state.headerHeight);
      if (opacityPercent >= 0) {
        this.setState({
          opacityPercent,
        })
      }
    } else {
      this.setState({opacityPercent: '1'});
    }
  }


  updateHeaderHeight() {
    this.setState({
      headerHeight: this.header.clientHeight,
    })
  }


  render() {
    return (
      <HeaderWrap style={{ opacity: this.state.opacityPercent }} innerRef={(header) => {
        this.header = header;
      }}>
        <TopBar/>
        <Navbar/>
      </HeaderWrap>

    )
  }
}





