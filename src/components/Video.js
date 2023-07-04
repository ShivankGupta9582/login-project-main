import React from 'react'
const src="https://www.youtube.com/embed/35npVaFGHMY?controls=0";
const Video = () => {
  return (
    <iframe width="560" height={315} src={src} title='Welcome' frameBorder={0} allowFullScreen/>
  )
}

export default Video


