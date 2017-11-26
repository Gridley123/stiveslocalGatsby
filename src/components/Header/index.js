import React from 'react';
import styled from 'styled-components'
import TopBar from './TopBar'
import Navbar from './Navbar'

const HeaderWrap = styled.div`
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
    if (this.props.location.pathname && this.props.location.pathname === '/') {
      this.setOpacityToScroll();
      this.addListener();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.controlListener(nextProps);
  }

  componentWillUnmount() {
    this.removeListener();
  }

  controlListener(nextProps) {
    if (nextProps && nextProps.location.pathname === '/') {
      this.addListener();
      this.setOpacityToScroll();
    } else {
      this.removeListener();
      this.setOpacityToFull();
    }
  }

  setOpacityToScroll() {
    const opacityPercent = 1 - ((this.state.headerHeight - window.scrollY) / this.state.headerHeight);
    if (opacityPercent >= 0) {
      this.header.style.opacity = opacityPercent;
    }

  }

  setOpacityToFull() {
    this.header.style.opacity = '1';
  }

  setOpacityToNone() {
    this.header.style.opacity = '0';
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
    return (
      <HeaderWrap innerRef={(header) => {
        this.header = header
      }}
      >
        <TopBar/>
        <Navbar/>
      </HeaderWrap>

    )
  }
}





