import React from 'react'
import Placeholder from './Placeholder'

export default props => {
  console.log(props);
  const { text, media_link, badges, flags, id } = props
  return (
    <div className='post'>
    <div className='post-id'>No: { id }</div>
      <div className='post-content'>
        { !!media_link ? <Placeholder type='media_link' /> : null }
        <div className='post-text'>{ text }</div>
      </div>
    </div>
  )
}
