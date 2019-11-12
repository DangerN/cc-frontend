import React from 'react'

export default props => {
  const { type } = props
  const placeHolder = {
    media_link: () => {
      return (
        <img className='media-link-thumbnail' alt={`placeholder for ${props.media_link}`} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fproject-pokemon%2Fimages%2F4%2F47%2FPlaceholder.png%2Frevision%2Flatest%2Fscale-to-width-down%2F480%3Fcb%3D20170330235552&f=1&nofb=1'>
        </img>
      )
    }
  }
  return placeHolder[type]()
}
