import styled from 'styled-components'
import theme from '../../styles/theme'

const brandColors = [
  {
    name: 'facebook',
    color: '#3b5998'
  },
  {
    name: 'twitter',
    color: '#1da1f2'
  },
  {
    name: 'whatsapp',
    color: '#128c7e'
  }
]

const createCssLoop = () => {
  let styles = ''
  brandColors.map((val) => {
    styles += `
      .SocialMediaShareButton--${val.name}{
        &:hover{
          background-color: ${val.color};
          color: white;
        }
      }
    `
  })
  return styles;
}

const StSharer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .button {
    transition: all 300ms ease-out;
    font-size: 1.6rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    color: white;
    background-color: ${theme.accent};
  }
  ${createCssLoop()}
`

export { StSharer }