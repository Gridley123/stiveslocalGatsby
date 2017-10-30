import React from 'react'
import Img from 'gatsby-image';

export default ({ data }) => {
  console.log(data)
  return <div>Hello world</div>
}



// export const pageQuery = graphql`
//     query IndexQuery {
//         allImageSharp {
//             edges {
//                 node {
//                     ... on ImageSharp {
//                         resize(width: 125, height: 125, rotate: 180) {
//                             src
//                         }
//                     }
//                 }
//             }
//         }
//         sizes: imageSharp(id: { regex: "/St-Ives-Local-Cover-Tunnel-With-Logo.png/gatsby " }) {
//             sizes(
//                 duotone: { highlight: "#f00e2e", shadow: "#192550" }
//                 traceSVG: {
//                     color: "#f00e2e"
//                     turnPolicy: TURNPOLICY_MINORITY
//                     blackOnWhite: false
//                 }
//                 toFormat: PNG
//             ) {
//                 ...GatsbyImageSharpSizes_tracedSVG
//             }
//         }
//         resolution: imageSharp(id: { regex: "/lol.jpg/" }) {
//             resolutions(grayscale: true, width: 500) {
//                 ...GatsbyImageSharpResolutions_tracedSVG
//             }
//         }
//         cropDefault: imageSharp(id: { regex: "/gatsby.jpg/" }) {
//             resize(width: 180, height: 180) {
//                 src
//             }
//         }
//         cropBottomLeft: imageSharp(id: { regex: "/nyancat/" }) {
//             resize(width: 180, height: 180, cropFocus: SOUTHWEST) {
//                 src
//             }
//         }
//         cropEntropy: imageSharp(id: { regex: "/gatsby.jpg/" }) {
//             resize(width: 180, height: 180, cropFocus: ENTROPY) {
//                 src
//             }
//         }
//         cropCenter: imageSharp(id: { regex: "/gatsby.jpg/" }) {
//             resize(width: 180, height: 180, cropFocus: CENTER) {
//                 src
//             }
//         }
//     }
// `