import React from 'react';
import styled from 'styled-components'
import TideWidget from './TideWidget'
import Social from '../Social'

const Topbar = styled.div`
position: relative;
min-height: 46px;
border-bottom: 1px solid #f2f2f2;
background-color: #fff;
z-index: 1031;
`;

const TopbarInner = styled.div`
max-width: 1500px;
width: 90%;
margin: 0 auto;
`;

const PInfo = styled.p`
color: #272727;
float: left;
margin: 13px 0 0;
font-size: 11px;
line-height: 1.3;
`;

const TideWidgetStyled = styled(TideWidget)`
display: block;
`;

export default () =>
  <Topbar>
    <TopbarInner>
      <PInfo>
        Tel: <a href="tel: +447923541553">07923541553</a> @: <a
        href="mailto:imogen@stiveslocal.com">imogen@stiveslocal.com </a>
        <TideWidgetStyled/>
      </PInfo>
      <Social topbar/>
    </TopbarInner>
  </Topbar>