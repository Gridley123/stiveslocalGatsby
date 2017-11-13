import React from 'react'
import styled from 'styled-components'
import CentredDiv from '../../CenteredDiv';
import '../../../utils/global-styles';
import {GLink} from '../../Link';
import SubHeading from '../../SubHeading';

const FeatureContainer = styled.div`
margin-top: 15px;
margin-bottom: 15px;
`;

const H1 = styled.h1`
  color: #8da1b0;
display:block;
font-family:dearJoe5, sans-serif;
clear:both;
`;



const Img = styled.img`
margin: 15px auto;
display:block;
width: ${props => props.widthInPC || '30%'};
`;


export default (props) =>
  <CentredDiv>
    <FeatureContainer>
      <Img src={props.img} widthInPC = {props.widthInPC}/>
    <H1>{props.header}</H1>
      {props.link ? <GLink to={props.linkURL}>{props.linkTitle}</GLink> : <SubHeading>{props.linkTitle}</SubHeading>}
    </FeatureContainer>
  </CentredDiv>