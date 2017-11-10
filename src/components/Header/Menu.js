import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link';

const MenuMain = styled.ul`
display: block;
float: right; 
margin: 0;  
list-style: none;
padding: 0;
`;

const MenuItem = styled.li`
float: left;
position: relative;
line-height: 1.7;
display: list-item;
text-align: match-parent;
`;

const MenuLinkMain = styled(Link)`
color: #272727;
&:hover{
color: #b7b7b7;
}
position: relative;
display: block;
float: none;
line-height: 1;
text-decoration: none;
height: 60px;
padding-top: 37px;
font-family: "Lato",sans-serif;
font-style: normal;
font-weight: 700;
letter-spacing: 0.182em;
text-transform: uppercase;
padding-left: 16px;
padding-right: 16px;
font-size: 11px;
`;

const MenuLinkSpan = styled.span`
margin-right: -0.182em;
display: inline-block;
`;

const CollapseWrapper = styled.div`
clear: both;
overflow: hidden;
`;

const MenuCollapse = styled.ul`
margin: 25px 0;
padding: 0;
display: block;
list-style: disc none;
margin-before: 1em;
margin-after: 1em;
margin-start: 0px;
margin-end: 0px;
padding-start: 40px;
`;

const MenuItemCollapse = styled.li`
line-height: 1.7;
display: list-item;
text-align:match-parent;
margin-bottom: 0;
`;

const MenuLinkCollapse = styled(Link)`
color: #272727;
&:hover{
color: #b7b7b7;
}
margin: 0 0 -1px;
border: 1px solid #f2f2f2;
border-left: 0;
border-right: 0;
padding: 1em 0;
background-color: transparent;
display: block;
position: relative;
font-size: 14px;
line-height: 1.5;
white-space: normal;
font-family: "Lato",sans-serif;
font-style: normal;
font-weight: 700;
letter-spacing: 0.182em;
text-transform: uppercase;
`;

const activeStyle = { boxShadow: 'inset 0 4px 0 0 #2e7163', color: '#b7b7b7', };
const activeStyleCollapse = {color: '#b7b7b7', };

const MenuDesktop = (props) => {
  const links = props.links.map((link,i) =>
    <MenuItem key={i}>
      <MenuLinkMain exact = {link.name === 'Home'} to={link.href} activeStyle={activeStyle}>
        <MenuLinkSpan>{link.name}</MenuLinkSpan>
      </MenuLinkMain>
    </MenuItem>
  );
  return (
    <nav>
      <MenuMain>
        {links}
      </MenuMain>
    </nav>
  )
};


const MenuMobile = (props) => {
  const links = props.links.map((link, i) =>
    <MenuItemCollapse key={i}>
      <MenuLinkCollapse exact = {link.name === 'Home'} to={link.href} activeStyle={activeStyleCollapse}>
        <MenuLinkSpan>{link.name}</MenuLinkSpan>
      </MenuLinkCollapse>
    </MenuItemCollapse>
  );

  return (
    <CollapseWrapper style={{display: props.collapsed ? 'none' : 'block'}}>
      <MenuCollapse>
        {links}
      </MenuCollapse>
    </CollapseWrapper>
  )
};

export default {MenuDesktop, MenuMobile};