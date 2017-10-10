import React from 'react'
import styled from 'styled-components'
import tunnelWithLogo from '../../images/St-Ives-Local-Cover-Tunnel-With-Logo.png'

const LandingPageImg= styled.div`
  background: url(${tunnelWithLogo}) no-repeat center center; 
  background-size: cover;
  width:100%;
  height:100%;
`

export default class LandingPageImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width:'0', height: '0'
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return(
    <div className={"landingPageImgWrapper"} style={{width: this.state.width, height: this.state.height}}>
      <LandingPageImg className={"landingPageImg"}/>
    </div>
    )
  }

}


