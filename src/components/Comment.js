import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
// import {} from '../config.json'

const Comment = ({ url, identifier, title }) => {
  return (
    <div className='DisSizeSetting'>
      <DiscussionEmbed
        shortname='https-fanic12-github-io-coding-blog'
        config={(url, identifier, title)}
      />
    </div>
  )
}

export default Comment
