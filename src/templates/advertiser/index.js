import React from 'react';
import styled from 'styled-components';
import {GLink} from '../../components/Link';
import CentredDiv from '../../components/CenteredDiv';
import AdvertiserDetails from './AdvertiserDetails';
import Image from 'gatsby-image';
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
  const fm = data.jsonData;
  const formattedAddress = null;
  const resolutions = fm.image ? fm.image.resolutions : null;
  console.log(fm);
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
              {/*<Image resolutions={resolutions} />*/}
            </JustifyDiv>

          </Col>

        </Row>
      </Grid>
    </Wrapper>
  )
}

export const query = graphql`
    query AdvertiserQuery($slug: String!) {

        jsonData: contentfulBusiness(fields: {slug: {eq: $slug}}) {
            id
            fields {
                slug
            }
            categories {
                name
            }
            company_name
            home_phone
            email
            facebook_url
            instagram_url
            website_url
            detail {
                detail
            }
            image {
                id
                resolutions(width:400) {
                    base64
                    aspectRatio
                    width
                    height
                    src
                    srcSet
                }
            }
            home_address_line_1
            town
            postcode
            twitter_url
            mobile_phone
            home_address_line_2
            contact_first_name
            contact_last_name
            location
        }
    }
`;
