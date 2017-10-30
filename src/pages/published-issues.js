import React from 'react';
import {makeResponsive, SpringGrid} from 'react-stonecutter';
import styled from 'styled-components';
import Link from 'gatsby-link';


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

const Image = styled.img`
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
  console.log(data);
  const edges = data.allMarkdownRemark.edges;
  console.log(edges);
  const listItems = edges.map((edge) => {
    console.log('Path Prefis: ' + __PATH_PREFIX__);
    const imageURL = __PATH_PREFIX__ + edge.node.frontmatter.imageURL;
    return (
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
        allMarkdownRemark(sort: {fields: [frontmatter___issue_date], order: DESC} filter: {frontmatter : {title: {regex: "published-posts/g"}}}) {
            edges {
                node {
                    id
                    html
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        embed_code
                        issue_date
                        pubURL
                        imageURL
                        _PARENT
                        parent
                    }
                }
            }
        }}
`

export default PublishedIssues;

