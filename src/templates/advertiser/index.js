import React from 'react';
import styled from 'styled-components';
import {GLink} from '../../components/Link';
import CentredDiv from '../../components/CenteredDiv';
import AdvertiserDetails from './AdvertiserDetails';
import Img from 'gatsby-image';
import {Col, Grid, Row} from 'react-flexbox-grid';

const Wrapper = styled.div`
padding-top: 118px;
`;

const BackLink = styled(GLink)`
  font-size: 19px;
`;

const JustifyDiv = styled.div`

`


export default ({ data }) => {
  const fm = data.jsonData.edges[0].node;
  console.log(data.imageURL);
  console.log(fm);
  const formattedAddress = null;
  return (
    <Wrapper>
      <BackLink to={'/local-business-directory'}>
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

        jsonData: allBusiness(filter: {fields: {slug: {eq: $slug}}}) {
            edges {
                node {
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
                    image
                    home_address_line_1
                    town
                    postcode
                    twitter_url
                    mobile_phone
                    home_address_line_2
                    contact_first_name
                    contact_last_name
                }
            }
        }
        imageURL: imageSharp(id: {regex: $imageURLRegex}) {
            resolutions(
                width: 400
            ) {
                ...GatsbyImageSharpResolutions
            }

        }
    }
`;
