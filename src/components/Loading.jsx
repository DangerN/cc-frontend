import React from 'react'

export default props => {
  const {type} = props
  const loading = {
    'thread': props => {
      return (
        <div>
          loading thread....
        </div>
      )
    },
    'catalog': props => {
      return (
        <div>
          loading catalog....
        </div>
      )
    },
    'screen': ({loaded}) => {
      return (
        <div id='loading-screen' className={loaded ? 'loaded' : 'loading'}>
          this is a loading screen
        </div>
      )
    }
  }[type](props)
  return loading
}
