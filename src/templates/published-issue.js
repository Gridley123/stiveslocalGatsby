import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
padding: 20px;
font-weight: 300!important;
margin: 150px 20px 20px;
`;

const ImageWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const IssueHeader = styled.h1`
margin-top: 30px;
`;

const IssueBody = styled.div`

`;

const EmbedWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

class Embed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const script = document.createElement("script");
    script.src = "//e.issuu.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div data-configid={`18888859/${this.props.data.markdownData.frontmatter.embed_code}`}
           style={{ width: '525px', height: '373px' }} className="issuuembed"/>
    )
  }
}


export default ({ data }) => {

  console.log(data);
  return (
    <PageWrapper>
      <EmbedWrapper>
        <Embed data={data} />
      </EmbedWrapper>
      {/*<ImageWrapper>*/}
      {/*<Img resolutions={data.imageURL.resolutions}/>*/}
      {/*</ImageWrapper>*/}
      <IssueHeader>
        {data.markdownData.frontmatter.title}
      </IssueHeader>
      <IssueBody dangerouslySetInnerHTML={{ __html: data.markdownData.html }}>
      </IssueBody>
    </PageWrapper>
  )
}

export const query = graphql`
    query BlogPostQuery($slug: String!, $imageURLRegex: String!) {
        markdownData: markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                embed_code
            }
        }
        imageURL: imageSharp(id: {regex: $imageURLRegex}) {
            id
            resolutions(
                width: 300
            ) {
                ...GatsbyImageSharpResolutions
            }

        }
    }
`;