import React from 'react'
import {Row} from 'react-flexbox-grid';
import '../../../utils/global-styles';
import ContentCol from './ContentCol';
import ImageCol from './ImageCol';
import {Content1, Content2, Content3} from './Content';
import styled from 'styled-components'



export default (props) => {
  if (props.direction === 'left') {
    return (
      <div>
        <Row style={{ height: props.rowHeight }}>
          <ContentCol breakspoint={props.breakpoint} rowHeight={props.rowHeight}>
            {props.content}
          </ContentCol>
          <ImageCol breakpoint={props.breakpoint} imageUrl={props.imageURL}/>
        </Row>
      </div>
    )

  } else {
    return (
      <div>
        <Row style={{ height: props.rowHeight }}>
          <ImageCol breakpoint={props.breakpoint} imageUrl={props.imageURL}/>
          <ContentCol rowHeight={props.rowHeight} breakpoint={props.breakpoint}>
            {props.content}
          </ContentCol>
        </Row>
      </div>
    )
  }
};