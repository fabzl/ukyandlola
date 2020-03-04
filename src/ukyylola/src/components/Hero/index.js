import React from 'react'
import VideoCover from 'react-video-cover'
import {Container, Content, Bg} from './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Hero extends React.Component {
  constructor(props){
    super(props)
    this.clickScroll = this.clickScroll.bind(this)
  }
  clickScroll(){
    if(typeof window !== 'undefined'){
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
  render() {
    const { videosrc, children } = this.props
    const videoOptions = {
      src: videosrc,
      ref: videoRef => {
        this.videoRef = videoRef
      },
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true
    }
    return (
      <Container>
        <Content>
          <div className="wrap">
            {children}
          </div>
          <div className="more" onClick={this.clickScroll}>
            Ver más
            <FontAwesomeIcon className="icon" icon={['fas', 'chevron-down']} />
          </div>
        </Content>
        <Bg>
          <VideoCover
            videoOptions={videoOptions}
          />
        </Bg>
      </Container>
    )
  }
}

export default Hero