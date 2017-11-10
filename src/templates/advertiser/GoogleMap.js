import React, {Component} from 'react';
import styled from 'styled-components';

const MapIframe = styled.iframe`
display: ${props => props.showMap ? 'block' : 'none'};
`

class GoogleMap extends Component {
  constructor(props, context) {
    super(props, context);
  }



  render() {
    return(
    <MapIframe showMap = {this.props.showMap} width={this.props.width} height={this.props.height} src={this.props.url} frameBorder="0" />
    )
  }
}


export default GoogleMap;


