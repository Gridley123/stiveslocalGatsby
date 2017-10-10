import React from 'react'
import LandingPageImage from './LandingPageImage';
import HomeContent from './HomeContent/index';
import Features from './Features';
import Stats from './Stats';
import FacebookFeed from './FacebookFeed';
import Issues from './Issues';

export default () =>
  <div>
    <LandingPageImage/>
    <HomeContent/>
    <Features />
    <Stats />
    <Issues />
    <FacebookFeed />
  </div>
