import React from 'react';
import {Col, Grid, Row} from 'react-flexbox-grid';
import Address from './Address';
import Telephone from './Telephone';
import Email from './Email';
import Name from './Name';
import SocialMedia from './SocialMedia';
import Website from './Website';
import Detail from './Detail'



export default ({ advertiserData, formattedAddress }) => {

  return (
    <Grid fluid style={{ padding: '0' }}>
      <Name advertiserData={advertiserData} />
      <Address style={{ marginBottom: '15px' }} advertiserData={advertiserData}
               formattedAddress={formattedAddress}/>
      <Telephone advertiserData={advertiserData} />
      <Email advertiserData={advertiserData} />
      <Website advertiserData={advertiserData} />
      <SocialMedia advertiserData={advertiserData} />
      <Detail advertiserData={advertiserData} />
    </Grid>
  )


}

