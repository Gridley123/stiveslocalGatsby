import React from 'react'
import styled from 'styled-components'
import {Col} from 'react-flexbox-grid';
import '../../../utils/global-styles';
import MediaQuery from 'react-responsive';


export default (props) => {
  const ContentImg = styled.div`
    height:100%;
    width:100%;
    background: url(${props => props.url}) no-repeat center center; 
    background-size: cover;
  `;

  return (
    <MediaQuery minWidth={Number(props.breakpoint)}>
      <Col md={7} style={{ padding: 0 }}>
        <ContentImg url={props.imageUrl}/>
      </Col>
    </MediaQuery>

  )
};