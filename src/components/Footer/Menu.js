import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link'

const FooterMenu = styled.ul`
margin: 10px 0;
line-height: 1.3;
list-style: none;
padding: 0;
-webkit-margin-before: 1em;
-webkit-margin-after: 1em;
-webkit-margin-start: 0px;
-webkit-margin-end: 0px;
-webkit-padding-start: 40px;
`

const MenuItem = styled.li`
margin: 0 0.5em;
display: inline-block;
line-height: 1.7;
`

const MenuLink = styled(Link)`
display: block;
font-weight: 400;
letter-spacing: 2px;
text-transform: uppercase;
color: #2e7163;
text-decoration: none;
background-color: transparent;
transition: color 0.3s ease,background-color 0.3s ease,border-color 0.3s ease,box-shadow 0.3s ease;
`

export default (props) => {
  const links = props.links.map((link,i) =>
    <MenuItem key={i}>
      <MenuLink to={link.href}>
        {link.name}
      </MenuLink>
    </MenuItem>
  );
  return (

      <FooterMenu>
        {links}
      </FooterMenu>

  )
};

