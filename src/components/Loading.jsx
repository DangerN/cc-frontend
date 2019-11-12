import React from 'react'
import { SVG } from '../constants'

export default props => {
  const {type, format} = props
  return {
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
        <div className={loaded ? 'loading-screen loaded' : 'loading loading-screen'}>
          this is a loading screen
        </div>
      )
    },
    'media': {
      'img': ({ link, loaded, setLoaded}) => {
        return (
          <div className={ loaded ? 'curtain-thumb loaded' : 'curtain-thumb loading'}>
            { SVG.rings() }
            <img src={link} className='img-thumb' onLoad={()=>setLoaded(true)}/>
          </div>
        )
      }
    }[format],
  }[type](props)
}
