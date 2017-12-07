import React, {Component} from 'react';
import styled from 'styled-components';
import GoogleMap from './GoogleMap';
import {Col, Row} from 'react-flexbox-grid';
import Link from '../../components/Link';

const SmallerLink = styled(Link)`
font-size: 16px;
`;

const Para = styled.p`
margin-bottom: 0;
`;

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
    };
    this.toggleMap = this.toggleMap.bind(this);
  }

  toggleMap(e) {
    e.preventDefault();
    this.setState(prevState => ({
      showMap: !prevState.showMap,
    }));
  }

  render() {
    const advertiserData = this.props.advertiserData;
    const formattedAddress = advertiserData.location || null;
    console.log(formattedAddress);

    const homeAddress1 =
      advertiserData.home_address_line_1 || null;

    const homeAddress2 =
      advertiserData.home_address_line_2 || null;

    const town =
      advertiserData.town || null;

    const postcode =
      advertiserData.postcode || null;

    const mapURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB8xvJ8hZKqR5TYnEMh7vbB4kTGbZ8ul88&q=${formattedAddress}`;
    const showMapLink = <SmallerLink href="#" onClick={this.toggleMap}>{this.state.showMap ?  "Click here to hide map" : "Click here to show map"} </SmallerLink>;
    const map = <GoogleMap showMap={this.state.showMap} width="500" height="500" url={mapURL}/>;

    return (
      <div>
        <Row>
          <Col xs={6}>
            {(homeAddress1 || homeAddress2 || town || postcode) ? <Para><strong>Address:</strong></Para> : null}
          </Col>
          <Col xs={6}>
            <div>
              {homeAddress1 ? <Para>{homeAddress1}<br/></Para> : null}
              {homeAddress2 ? <Para>{homeAddress2}<br/></Para> : null}
              {town ? <Para>{town}<br/></Para> : null}
              {postcode ? <Para>{postcode}<br/></Para> : null}
              {formattedAddress ? showMapLink : null}
            </div>
          </Col>
        </Row>
        {formattedAddress ? map : null}
      </div>
    );
  }
}

export default Address;