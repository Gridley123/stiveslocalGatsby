import React from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid';
import '../../../utils/global-styles';
import CentredDiv from '../../CenteredDiv';
import styled from 'styled-components';
import StatDiv from './StatDiv';

const StatsWrapper = styled.div`
  padding: 30px;
  background-color: #fff;
  height:300px;
`;

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.activateAnimation = this.activateAnimation.bind(this);
  }

  componentDidMount() {
    this.activateAnimationListener = this.activateAnimation;
    window.addEventListener('scroll', this.activateAnimationListener);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.activateAnimationListener);
  }

  activateAnimation() {
    if ((window.scrollY + window.innerHeight - this.wrapper.clientHeight) > this.wrapper.offsetTop) {
      this.setState({
        animationHasPlayed: true,
        copiesDistributed: 8000,
        issuesSoFar: 16,
        years: 10
      })
    }

  }

  render() {
    return (

      <Grid style={{ padding: 0 }} fluid>
        <StatsWrapper innerRef={wrapper => this.wrapper = wrapper}>
          <Row style={{ height: '100%' }}>
            <Col md={4} xs={12}>
              <CentredDiv>
                <StatDiv className="statDiv1"
                         start={0} end={this.state.copiesDistributed || 0}
                         text={'Copies distributed each month'}/>
              </CentredDiv>
            </Col>
            <Col md={4} xs={12}>
              <CentredDiv>
                <StatDiv start={0} end={this.state.issuesSoFar || 0} text={'Issues so far'}/>
              </CentredDiv>
            </Col>
            <Col md={4} xs={12}>
              <CentredDiv>
                <StatDiv start={0} end={this.state.years || 0}
                         text={'Years of publishing experience'}/>
              </CentredDiv>
            </Col>
          </Row>
        </StatsWrapper>
      </Grid>
    )
  }
}



