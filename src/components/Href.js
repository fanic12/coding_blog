import React from 'react'

function Href({ url, title, openNewTab = true, children }) {
  return (
    <a
      href={url}
      target={openNewTab ? '_blank' : '_self'}
      // rel='noopener noreferrer'
      title={title}
      className='SetColor'>
      {' '}
      {children}
    </a>
  )
}

export default Href
