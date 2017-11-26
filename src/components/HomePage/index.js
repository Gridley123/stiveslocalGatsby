import React from 'react'
import LandingPageImage from './LandingPageImage';
import HomeContent from './HomeContent/index';
import Features from './Features';
import Stats from './Stats';
import FacebookFeed from './FacebookFeed';
import Issues from './Issues';

export default (props) => {
  console.log(props.data.landingPageImgSize);
  return (
    <div>
      <LandingPageImage sizes={props.data.landingPageImgSize.childImageSharp.sizes}/>
      <HomeContent/>
      <Features/>
      <Stats/>
      <Issues limitedIssues={props.data.limitedIssues}/>
      <FacebookFeed/>
    </div>
  )
}



