import React, { useState } from 'react'

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
        <div className={loaded ? 'curtain-screen loaded' : 'curtain-screen loading'}>
          { SVG.rings() }
        </div>
      )
    },
    'media': {
      'img': ({ link, loaded, setLoaded}) => {
        return (
          <div className={ loaded ? 'curtain thumb loaded' : 'curtain thumb loading'}>
            { SVG.rings() }
            <img src={link} className='img thumb' onLoad={()=>setLoaded(true)}/>
          </div>
        )
      }
    }[format],
    'banner': {
      'wide': ({ useLoad, link }) => {
        const [load, setLoad] = useLoad
        return (
          <div className={ load ? 'curtain banner loaded' : 'curtain banner loading'}>
            { SVG.rings() }
            <img src={link} className='img banner wide' onLoad={()=>setLoad(true)}/>
          </div>
        )
      }
    }[format],
  }[type](props)
}
