import React from 'react'
import {TitleContainer} from './Content.css'
import Fade from 'react-reveal/Fade'

const Title = ({ title, titulo, subtitulo, excerpt }) => {

return (
  <TitleContainer>
    <Fade bottom>
    {titulo && subtitulo
      ?
        <h2 className="title">{titulo} <small>{subtitulo}</small></h2>
      :
        <h2 className="title">{title}</h2>
    }
    </Fade>
    <Fade bottom>
      <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </Fade>
  </TitleContainer>
  )
}

export default Title