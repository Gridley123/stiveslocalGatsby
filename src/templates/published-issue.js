import React from 'react';
import styled from 'styled-components';
import 'whatwg-fetch';

const PageWrapper = styled.div`
padding: 20px;
font-weight: 300!important;
margin: 150px auto 20px;
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
    this.state = {
      html: null,
    }
    this.loadIframe = this.loadIframe.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  componentDidMount() {
    console.log('Mounted');
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log(`Inner Width ${window.innerWidth}`);
    this.loadIframe(window.innerWidth);
  }

  loadIframe(windowWidth) {
    console.log(`loadIframe with width of ${windowWidth}`);
    const pubURL = this.props.data.markdownData.pubURL;

    async function getOEmbed() {
      const url = `https://issuu.com/oembed?url=${pubURL}&format=json&iframe=true&maxwidth=${windowWidth}`;
      let res, json, html;
      try {
        res = await fetch(url);
        json = await res.json();
        console.log(json);
        html = json.html;
        return html;
      } catch (err) {
        console.error(err);
      }
    }

    getOEmbed().then(html => this.setState({ html }));
  }


  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.html }}/>
      </div>
    )
  }
}

export default ({ data }) => {
  console.log(data);
  let detailHTML = null;
  if (data.markdownData.detail) {
    detailHTML = data.markdownData.detail.childMarkdownRemark.html;
  }
  return (
    <PageWrapper>
      <EmbedWrapper>
        <Embed data={data}/>
      </EmbedWrapper>
      {/*<ImageWrapper>*/}
      {/*<Img resolutions={data.imageURL.resolutions}/>*/}
      {/*</ImageWrapper>*/}
      <IssueHeader>
        {data.markdownData.title}
      </IssueHeader>
      <IssueBody dangerouslySetInnerHTML={{ __html: detailHTML }}>
      </IssueBody>
    </PageWrapper>
  )
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownData: contentfulPublishedIssue(fields: { slug: { eq: $slug } }) {
            title
            pubURL
            detail {
                childMarkdownRemark {
                    html
                }
            }
            image{
                resolutions(width: 300){
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
`;