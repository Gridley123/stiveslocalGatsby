import {Col, Grid, Row} from 'react-flexbox-grid';
import React from 'react'
import styled from 'styled-components'
import Feature from './Feature';
import '../../../utils/global-styles';
import magnifyGlass from '../../../images/anchor-magnify.png';
import calendarClock from '../../../images/calendar-clock.png';



const Wrapper = styled.div`
    background:center top repeat;
`;

export default () => {
  return (
    <Wrapper>
      <Grid style={{ padding: 0 }} fluid>
        <Row style={{height: '100%', backgroundColor: 'hsl(180, 16%, 89%)'}}>
          <Col md={6} xs={12}>
            <Feature img={magnifyGlass}
                     link
                     header={'Local Business Directory'} linkURL={'/local-business-directory'}
                     linkTitle={'Find Local Businesses'}/>
          </Col>
          <Col  md={6} xs={12}>
            <Feature img={calendarClock} header={'Local What\'s On'}
                     linkTitle={'Browse Local Events - Coming Soon'}
                     widthInPC = '15%'
            />
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}
