import React, { useState } from 'react'
import { StVideo } from './VideoPlayer.css'
import ReactPlayer from 'react-player'
import { Waypoint } from 'react-waypoint'

const VideoPlayer = ({ url }) => {
  // const player = React.createRef()

  const [shouldPlay, updateShouldPlay] = useState(false)
  const handleEnterViewport = () => {
    updateShouldPlay(true)
  }
  const handleExitViewport = () => {
    updateShouldPlay(false)
  }

  return (
    <Waypoint
      onEnter={handleEnterViewport}
      onLeave={handleExitViewport}
    >
      <StVideo>
        <ReactPlayer className="react-player"
 url={url} playing={shouldPlay} loop controls={true} width='100%' height='100%' playsinline={true} />
      </StVideo>
    </Waypoint>
  )
}

export default VideoPlayer