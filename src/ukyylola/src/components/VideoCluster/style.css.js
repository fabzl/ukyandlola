import styled, { keyframes } from 'styled-components'
import theme from '../../styles/theme'

const KeyframeArrow = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`

const Container = styled.section`
  position: relative;
  min-height: 80vh;
  overflow: hidden;
`

const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  min-height: 80vh;
  .wrap{
    svg{
      fill: ${theme.color};
      min-width: 40vw;
      min-height: 40vh;
    }
  }
  .more{
    position: absolute;
    bottom: 1rem;
    text-transform: uppercase;
    font-size: 10px;
    text-align: center;
    letter-spacing: 1px;
    .icon{
      display: block;
      margin: 12px auto 0;
      animation: ${KeyframeArrow} 1.5s ease-in-out 0s infinite;
    }
  }
`

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    background: linear-gradient(transparent, ${theme.background});
  }
`

export { Container, Content, Bg }