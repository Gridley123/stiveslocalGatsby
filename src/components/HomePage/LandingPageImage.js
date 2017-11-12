import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image';
import tunnelWithLogo from '../../images/St-Ives-Local-Cover-Tunnel-With-Logo.png'

const LandingPageImg = styled(Img)`
  width:100%;
  height:100%;
  object-fit: cover;
`

export default class LandingPageImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '0', height: '0'
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
    return (
      <div className={"landingPageImgWrapper"}
           style={{ width: this.state.width, height: this.state.height }}>
        <LandingPageImg style={{ width: this.state.width, height: this.state.height }} className={"landingPageImg"} sizes={this.props.sizes} />
        {/*<LandingPageImg className={"landingPageImg"}/>*/}
      </div>
    )
  }

}

