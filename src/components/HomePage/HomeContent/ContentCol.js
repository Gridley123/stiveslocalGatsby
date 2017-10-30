import React from 'react'
import {Col} from 'react-flexbox-grid';
import '../../../utils/global-styles';
import ContentWrap from '../../CenteredDiv';

export default (props) => {



  return (
    <Col md={5} sm={12} xs={12}>
      <ContentWrap className = "contentWrap">
        {props.children}
      </ContentWrap>
    </Col>
  )
};