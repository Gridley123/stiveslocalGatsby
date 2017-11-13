import React from 'react'
import styled from 'styled-components'
import {Col, Grid, Row} from 'react-flexbox-grid';
import '../../../utils/global-styles';
import texturedBackground from '../../../images/textured-background';
import CentredDiv from '../../CenteredDiv';
import {GLink} from '../../Link';
import SubHeading from '../../SubHeading';
import Link from 'gatsby-link';


const Wrapper = styled.div`
background:url(${texturedBackground}) center top repeat;
text-align:center;
padding: 20px;
`;

const Image = styled.img`

`;

const H1 = styled.h1`
    font-family: 'dearJoe5', 'Times New Roman', Serif;
    color: #8da1b0;
    font-size: 64px;
  `;

const HoverOverlay = styled.div`

display: flex;
justify-content: center;
align-items: center;
position: absolute;
left: 0;
top: 0;
background-color: gray;
opacity: 0;
&:hover {
opacity: 0.7;
}
`;

const HoverLink = styled.div`
color: white;
background-color:black;
border-radius: 2px;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
`;

export default class Issues extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const edges = this.props.limitedIssues.edges;
    const listItems = edges.map((edge) => {
      const imageURL = __PATH_PREFIX__ + edge.node.frontmatter.imageURL;
      return (
        <Col md={4} xs={12}>
          <CentredDiv>
            <div key={edge.node.id}>
              <Link to={edge.node.fields.slug}>
                <div>
                  <Image src={imageURL} />
                </div>
                <HoverOverlay>
                  <HoverLink>
                    {edge.node.frontmatter.title}
                  </HoverLink>
                </HoverOverlay>
              </ Link>
            </div>
          </CentredDiv>
        </Col>
      )
    });

    return (
      <Wrapper>
        <H1>
          Recent Issues
        </H1>
        <SubHeading>
          All our past issues are available online
          <GLink to={"/published-issues"}> here</GLink>
        </SubHeading>
        <Grid style={{ padding: 0 }} fluid>
          <Row style={{ height: '100%' }}>
            {listItems}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}


