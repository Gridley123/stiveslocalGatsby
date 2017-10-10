import React from 'react'
import styled from 'styled-components'
import {Col, Grid, Row} from 'react-flexbox-grid';
import '../../../utils/global-styles';
import texturedBackground from '../../../images/textured-background';
import CentredDiv from '../../CenteredDiv';
import Link from '../../Link';
import SubHeading from '../../SubHeading';


const Wrapper = styled.div`
background:url(${texturedBackground}) center top repeat;
height:560px;
text-align:center;
padding: 20px;
`;

const H1 = styled.h1`
    font-family: 'dearJoe5', 'Times New Roman', Serif;
    color: #8da1b0;
    font-size: 64px;
  `;

export default class Issues extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <H1>
          Recent Issues
        </H1>
        <SubHeading>
          All our past issues are available online
          <Link href={"/published-issues"}> here</Link>
        </SubHeading>
        <Grid style={{ padding: 0 }} fluid>
          <Row style={{ height: '100%' }}>
            <Col md={4} xs={12}>
              <CentredDiv>
                Issue1
              </CentredDiv>
            </Col>
            <Col md={4} xs={12}>
              <CentredDiv>
                Issue2
              </CentredDiv>
            </Col>
            <Col md={4} xs={12}>
              <CentredDiv>
                Issue3
              </CentredDiv>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}


