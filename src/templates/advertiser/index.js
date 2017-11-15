import React from 'react';
import styled from 'styled-components';
import Link from '../../components/Link';
import CentredDiv from '../../components/CenteredDiv';
import AdvertiserDetails from './AdvertiserDetails';
import Img from 'gatsby-image';
import {Col, Grid, Row} from 'react-flexbox-grid';

const Wrapper = styled.div`
padding-top: 118px;
`;

const BackLink = styled(Link)`
  font-size: 19px;
`;

const JustifyDiv = styled.div`

`


export default ({ data }) => {
  const fm = data.jsonData;
  const formattedAddress = data.jsonData.fields.formatted_address;
  return (
    <Wrapper>
      <BackLink href={'/local-business-directory'}>
        Go back to directory
      </BackLink>
      <CentredDiv>
        <h1>
          St Ives & Surrounding Area Local Business Directory
        </h1>
      </CentredDiv>
      <CentredDiv style={{ marginBottom: '30px' }}>
      </CentredDiv>
      <Grid fluid>
        <Row>
          <Col md={6} xs={12}>
            <JustifyDiv>
              <div>
                <h2>
                  {fm.company_name}
                </h2>
                <AdvertiserDetails formattedAddress={formattedAddress} advertiserData={fm}/>
              </div>
            </JustifyDiv>
          </Col>
          <Col md={6} xs={12}>
            <JustifyDiv>
              {data.imageURL ? <Img resolutions={data.imageURL.resolutions}/> : null}
            </JustifyDiv>

          </Col>

        </Row>
      </Grid>
    </Wrapper>
  )
}

export const query = graphql`
    query AdvertiserQuery($slug: String!, $imageURLRegex: String!) {
        jsonData: localBusinessDirectoryJson(fields: {slug: {eq: $slug}}) {
            id
            fields {
                slug
            }
            
            categories
            company_name
            home_phone
            email
            facebook_url
            instagram_url
            website_url
            detail
            photo_url
            home_address_line_1
            home_address_line_2
            town
            postcode
            latitude
            longitude
            twitter_url
            mobile_phone
            contact_first_name
            contact_last_name

        }
        imageURL: imageSharp(id: {regex: $imageURLRegex}) {
            id
            resolutions(
                width: 400
            ) {
                ...GatsbyImageSharpResolutions
            }

        }
    }
`;
