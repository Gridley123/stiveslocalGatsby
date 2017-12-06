import React from 'react';
import {makeResponsive, SpringGrid} from 'react-stonecutter';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Image from 'gatsby-image';


const Grid = makeResponsive(SpringGrid, {
  maxWidth: 1920,
  minPadding: 100,
});

const columnWidth = 330;
const itemHeight = 460;


const Wrapper = styled.div`
width:100%;
margin: 0;
display: flex;
justify-content: center;
`;

const ImgWrap = styled.div`
width: ${columnWidth + 'px'};
height:${itemHeight + 'px'};
`;


const HoverOverlay = styled.div`
width: ${columnWidth + 'px'};
height:${itemHeight + 'px'};
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
`


const PublishedIssues = ({ data }) => {
  const edges = data.allContentfulPublishedIssue.edges;
  const listItems = edges.map((edge) => {
    return (
      <div key={edge.node.id}>
        <Link to={edge.node.fields.slug}>
          <ImgWrap>
            <Image resolutions={edge.node.image.resolutions}/>
          </ImgWrap>
          <HoverOverlay>
            <HoverLink>
              {edge.node.title}
            </HoverLink>
          </HoverOverlay>
        </ Link>
      </div>
    )
  });

  return (
    <Wrapper>
      <Grid style={{ marginTop: '150px', textAlign: 'center' }}
            component="div"
            columns={20}
            columnWidth={columnWidth}
            gutterWidth={20}
            gutterHeight={20}
            itemHeight={itemHeight}
            springConfig={{ stiffness: 170, damping: 26 }}
      >
        {listItems}

      </Grid>
    </Wrapper>
  )
};

export const publishedPosts = graphql`
    query allPublishedPosts {
        allContentfulPublishedIssue(sort: {fields:[issue_date], order:DESC}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    id
                    title
                    issue_date
                    pubURL
                    image {
                        resolutions(width:200, height:300) {
                            base64
                            aspectRatio
                            width
                            height
                            src
                            srcSet
                        }
                    }
                }
            }
        }
    }
`

export default PublishedIssues;

