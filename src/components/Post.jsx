import React, { useState } from 'react'
import Loading from './Loading'
import { FLAG_KEY } from '../constants'

export default props => {
  const { text, media_link, badges, flags, id } = props
  const [ mediaLoaded, setMediaLoaded ] = useState(false)
  const mediaFlag = () => {
    return flags.find(flag=>{
      return FLAG_KEY.media.includes(flag)
    })
  }
  return (
    <div className='post'>
    <div className='post-id'>No: { id }</div>
      <div className='post-content'>
        { !!media_link ? <Loading
          type='media'
          format={mediaFlag()}
          link={media_link}
          loaded={mediaLoaded}
          setLoaded={setMediaLoaded}
          /> : null }
        <div className='post-text'>{ text }</div>
      </div>
    </div>
  )
}
