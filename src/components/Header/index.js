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
  }

  render() {
    return (
      <HeaderWrap style={{ opacity: this.props.opacityPercent }}
      >
        <TopBar/>
        <Navbar/>
      </HeaderWrap>

    )
  }
}





