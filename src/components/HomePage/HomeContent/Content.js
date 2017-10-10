import React from 'react'
import styled from 'styled-components'
import '../../../utils/global-styles';
import stIvesLocalBrand from '../../../images/StIvesLocalBrand.svg';
import award from '../../../images/award.jpg';
import C2AButton from '../../C2AButton';

const H1 = styled.h1`
    font-family: 'dearJoe5', 'Times New Roman', Serif;
    color: #8da1b0;
  `;

const ContentPara = styled.p`
    margin: 0 40px;
  `;

const Content1 = () => {
  const BrandImg = styled.img`
    width:220px;
   `;

  return(
    <div>
      <H1>Welcome to </H1>
      <BrandImg src={stIvesLocalBrand} /> <br/>
      <ContentPara>St. Ives Local is a bi-monthly community magazine delivered FREE by
        Royal Mail to thousands of homes and businesses in St. Ives, Carbis Bay and Lelant. </ContentPara>
      <C2AButton href="/adverise-with-us" >
        Interested in Advertising? Click Here!
      </C2AButton>
    </div>
  )
};

const Content2 = () => {
  return(
    <div>
      <H1>Quality Local Advertising</H1>
      <ContentPara>With 8,000 magazines printed and
        distributed, St Ives Local is an excellent way to let local residents find out about your business.</ContentPara>
      <C2AButton href="/adverise-with-us" >
        Interested in Advertising? Click Here!
      </C2AButton>
    </div>
  )
};

const Content3 = () => {
  const AwardImg = styled.img`
    width:40%;
    border-radius: 6px;
    vertical-align: middle;
    border: 0;
`;
  return(
    <div>
      <H1>Prize Winning Publication</H1>
      <AwardImg src={award} />
    </div>
  )
};

export default {
  Content1, Content2, Content3
}