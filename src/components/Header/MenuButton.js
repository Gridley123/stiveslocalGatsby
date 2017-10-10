import React from 'react';
import styled from 'styled-components'
import {FaBars} from 'react-icons/lib/fa'

const NavButton = styled.a`
display: block;
float: right;
margin-top: 10px;
text-shadow: 0 1px 1px rgba(255,255,255,0.75);
color: ${props => !props.collapsed ? '#919191' : '#b7b7b7'};
background-color: ${props => !props.collapsed ? '#f7f7f7' : '#fff'};
border-radius: 4px;
box-shadow: ${props => !props.collapsed ? 'inset 0 1px 4px rgba(0,0,0,0.25)' : 'inset 0 0 0 transparent, 0 1px 5px rgba(0,0,0,0.25)'};
padding: 0.458em 0.625em;
transition: box-shadow 0.3s ease,color 0.3s ease,background-color 0.3s ease;
line-height: 1;
`

const BarIcon = styled(FaBars)`
display: inline-block;
font-style: normal;
font-weight: normal;
text-decoration: inherit;
text-rendering: auto;
-webkit-font-smoothing: antialiased;
`

export default (props) =>
  <NavButton collapsed = {props.collapsed} onClick = {props.clickHandler} href={'#'}>
    <BarIcon/>
  </NavButton>


