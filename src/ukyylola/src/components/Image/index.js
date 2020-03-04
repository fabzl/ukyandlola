import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BgImage from './BgImage'
import { StNonProcessedImage } from './Image.css'

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              publicURL
              childImageSharp {
                normal:sizes(
                  maxWidth: 1200
                  quality: 90
                ) {
                  ...GatsbyImageSharpSizes
                }
                duotone:sizes(
                  maxWidth: 1200
                  quality: 90
                  duotone: {
                    highlight: "#FF3C00"
                    shadow: "#192550"
                  }
                ) {
                  ...GatsbyImageSharpSizes
                }
                grayscale:sizes(
                  maxWidth: 1200
                  quality: 60
                  grayscale: true
                ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }

      if(!image.node.childImageSharp && image.node.publicURL){
        return (
          <StNonProcessedImage>
            <img src={image.node.publicURL} alt="" />
          </StNonProcessedImage>
        )
      }

      const imageSizes = (imgtype) => {
        switch (imgtype) {
          case 'grayscale':
            return image.node.childImageSharp.grayscale;
          case 'duotone':
            return image.node.childImageSharp.duotone;
          default:
            return image.node.childImageSharp.normal;
        }
      }

      if (props.bg) {
        return (
          <BgImage
            alt={props.alt}
            sizes={imageSizes(props.type)}
          />
        )
      }
      return (
        <Img
          alt={props.alt}
          sizes={imageSizes(props.type)}
        />
      );
    }}
  />
)

export default Image