import styled from 'styled-components'
import theme from '../../styles/theme'
import { Link } from 'gatsby'
import Image from "gatsby-image"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Container = styled.section`
  position: relative;
  min-height: 80vh;
  margin-left: auto;
  margin-right: auto;
  .share-wrap{
    display: flex;
    justify-content: center;
  }
`

const SubtitleContainer = styled.div`

`

const TitleContainer = styled.section`
  position: relative;
  background-color: ${theme.background};
  margin-block-start: ${theme.fonttitlesize};
  margin-block-end: ${theme.fonttitlesize};
  max-width: ${theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 1px 1rem;
  @media (max-width: 800px){
    margin-block-start: calc(${theme.fonttitlesize} / 2);
    margin-block-end: calc(${theme.fonttitlesize} / 2);
  }
  h2{
    font-size: ${theme.fonttitlesize};
    line-height: ${theme.fonttitlesize};
    text-transform: uppercase;
    color: ${theme.accent};
    margin: 0;
    @media (max-width: 800px){
      font-size: calc(${theme.fonttitlesize} / 2);
      line-height: 100%;
    }
    small{
      display: block;
      text-transform: none;
      color: ${theme.color};
      font-family: ${theme.fonttitle3};
      font-style: italic;
      font-weight: normal;
    }
  }
  .share-wrap{
    display: flex;
    justify-content: center;
  }
  .excerpt{
    p{
      font-family: ${theme.fonttitle2};
      font-style: italic;
      font-weight: 700;
      font-size: calc(${theme.fonttitlesize} / 3);
    }
  }
`

const StyledImage = styled(Image)`

`;

const StyledContent = styled.div`
  h2,
  h3,
  p{
    max-width: ${theme.normalWidth};
    margin-left: auto;
    margin-right: auto;
    line-height: ${theme.lineheight};
    margin-block-start: calc(${theme.fontsize} * 1.5);
    margin-block-end: calc(${theme.fontsize} * 1.5);
    padding: 0 1rem;
  }
  h2,
  h3{
    font-family: ${theme.fonttitle2};
    font-style: italic;
    font-weight: 700;
  }
  p{
    font-size: ${theme.fontsize};
    &.has-drop-cap{
      &:first-letter {
        float: left;
        font-family: ${theme.fonttitle};
        color: ${theme.complementary};
        font-size: 6.2rem;
        line-height: 5.2rem;
        padding-top: 4px;
        padding-right: 8px;
        padding-left: 3px;
      }
    }
  }
`;

const Button = styled.div`
  transition: all 300ms ease-out;
  font-size: 2rem;
  width: auto;
  display: block;
  max-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.accent};
  border: 3px solid;
  border-color: ${theme.accent};
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  span{
    font-size: 1rem;
    padding-right: 1rem;
  }
  &:hover,
  &:active{
    color: ${theme.color};
    background-color: ${theme.accent};
  }
`

const Col = styled.div`
  display: grid;
  grid-template-columns: 1fr 5rem;
  align-items: center;
  grid-gap: 10px;
`;

export { Container, TitleContainer, StyledContent, StyledImage, SubtitleContainer, Col, StyledLink, Button}