import React from 'react'

function Youtube({ title, src }) {
  return (
    <iframe
      title={title}
      width='560px'
      height='315px'
      src={`https://www.youtube.com/embed/${src}`}
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen='true'></iframe>
  )
}

export default Youtube
