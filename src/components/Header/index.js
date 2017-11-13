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
    this.controlListener();
  }

  componentWillReceiveProps(nextProps) {
    this.controlListener(nextProps);
  }

  componentWillUnmount() {
    this.removeListener();
  }

  controlListener(nextProps) {
    console.log(this.props);
    if (this.props.location.pathname && this.props.location.pathname === '/') {
      this.setOpacityToScroll();
      this.addListener();
    } else if (nextProps && nextProps.location.pathname === '/') {
      this.setOpacityToScroll();
      this.addListener();
    } else {
      this.removeListener();
      this.setOpacityToFull();
    }
  }

  setOpacityToScroll() {
    if (window.scrollY < 300) {
      const opacityPercent = 1 - ((this.state.headerHeight - window.scrollY) / this.state.headerHeight);
      if (opacityPercent >= 0) {
        this.header.style.opacity = opacityPercent;
      }
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
    window.addEventListener('scroll', this.opacityScrollListener, false);
  }

  removeListener() {
    window.removeEventListener('scroll', this.opacityScrollListener, false);
  }


  updateHeaderHeight() {
    this.setState({
      headerHeight: this.header.clientHeight,
    })
  }

  render() {
    return (
      <HeaderWrap innerRef = {(header) => {this.header = header}}
      >
        <TopBar/>
        <Navbar/>
      </HeaderWrap>

    )
  }
}





