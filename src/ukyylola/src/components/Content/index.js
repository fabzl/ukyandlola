import React from 'react'
import {Container, StyledContent} from './Content.css'
// import WordpressRawContent from '../WordpressRawContent'
import Share from '../Sharer'

const Content = ({ title, image, excerpt, titulo, subtitulo, raw, video, slug }) => {

return (
  <Container>
    <StyledContent>
      <div className="share-wrap">
        <Share
          socialConfig={{
            twitterHandle: '@latercera',
            config: {
              url: `https://especiales.latercera.com/salud-ciencia-tecnologia-aleman/${slug}`,
              title: `${title} - Salud, ciencia y tecnología para deportistas - Especiales La Tercera - Auspiciado por Alemana Sport`,
            }
          }}
        />
      </div>
      {/* <WordpressRawContent raw={raw} /> */}
    </StyledContent>
  </Container>
  )
}

export default Content