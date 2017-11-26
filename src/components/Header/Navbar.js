import React from 'react';
import styled from 'styled-components'
import StIvesLocalBrand from '../../images/StIvesLocalBrand.svg';
import {MenuDesktop, MenuMobile} from './Menu';
import MenuButton from './MenuButton';
import MediaQuery from 'react-responsive';
import linksArray from '../../utils/links'

const NavbarWrapper = styled.div`
height: 60px;
margin-bottom: 1px;
`;

const NavbarOuter = styled.div`
border-bottom:1px solid #ccc;
background-color: #fff;
box-shadow: 0 0.5em .35em 0 rgba(0,0,0,0.135);
transform: translate3d(0,0,0);
position: relative;
overflow: visible;
z-index: 1030;
`;

const NavbarInner = styled.div`
min-height: 60px;
`;

const NavbarContainer = styled.div`
max-width: 1500px;
width: 90%;
margin: 0 auto;
position: relative;
`;

const Brand = styled.a`
margin-top: 17px;
display: block;
float: left;
line-height: 1;
background-color:transparent;
`;

const BrandImg = styled.img`
width: 200px;
height: auto;
vertical-align:middle;
border: 0;
margin: 0;
max-width: 100%;
`;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      collapsed: true,
    }
  }


  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  }

  render() {
    return (
      <NavbarWrapper>
        <NavbarOuter>
          <NavbarInner>
            <NavbarContainer>
              <Brand href={"/"}>
                <BrandImg src={StIvesLocalBrand} alt={"St Ives Local Brand"}/>
              </Brand>
              <MediaQuery query='(min-width: 1033px)'>
                <MenuDesktop links={linksArray}/>
              </MediaQuery>
              <MediaQuery query='(max-width: 1032px)'>
                <MenuButton collapsed={this.state.collapsed} clickHandler={this.handleClick}/>
                <MenuMobile collapsed={this.state.collapsed} links={linksArray}/>
              </MediaQuery>
            </NavbarContainer>
          </NavbarInner>
        </NavbarOuter>
      </NavbarWrapper>
    )
  }
}






