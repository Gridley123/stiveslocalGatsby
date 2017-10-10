import React from 'react'
import styled from 'styled-components'
import {Grid, Row} from 'react-flexbox-grid';
import '../../../utils/global-styles';
import greyBackground from '../../../images/greyBackground.png';
import stIves1 from '../../../images/stives1.jpg';
import stIvesMagazineFan from '../../../images/stIvesMagazineFan.jpg';
import stIvesWide from '../../../images/stIves-wide.jpg';
import RowX from './RowX';
import {Content1, Content2, Content3} from './Content';

const rowHeight = '380px';
const breakpoint = '1022';

const Wrapper = styled.div`
    background: url(${greyBackground}) center top repeat;
`;

const HR = styled.hr`
width: 80%;
margin:0 auto;
`;

export default (props) =>
  <Wrapper>
    <Grid style={{ padding: 0 }} fluid>
      <RowX direction={'left'} rowHeight={rowHeight} content={<Content1 />} imageURL={stIves1}
            breakpoint={breakpoint}/>
      <Row>
        <HR/>
      </Row>
      <RowX direction={'right'} rowHeight={rowHeight} content={<Content2 />}
            imageURL={stIvesMagazineFan}
            breakpoint={breakpoint}/>
      <Row>
        <HR/>
      </Row>
      <RowX direction={'left'} rowHeight={rowHeight} content={<Content3/>} imageURL={stIvesWide}
            breakpoint={breakpoint}/>

    </Grid>
  </Wrapper>

