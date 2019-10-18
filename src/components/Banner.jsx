import React from 'react'

export default props => {
  const boardBanner = () => {
    return `https://www.bu.edu/globalprograms/files/2015/05/banner-placeholder.png`
  }
  return (
    <img className='banner' src={boardBanner()}/>
  )
}
