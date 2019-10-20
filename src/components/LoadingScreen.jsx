import React from 'react'
import '../css/loading_screen.css'

export default ({ loaded }) => {
  return (
    <div id='loading-screen' className={loaded ? 'loaded' : 'loading'}>
      this is a loading screen
    </div>
  )
}
