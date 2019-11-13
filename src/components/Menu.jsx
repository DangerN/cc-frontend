import React, { useState } from 'react'
import { A , usePath } from 'hookrouter'
import useMediaQuery from 'use-media-query-hook'
import { FaHamburger, FaSearch, FaEllipsisV, FaHandshake } from 'react-icons/fa'

import { U } from '../constants'

const BoardDropDown = props => {
  
  let currentBoard = props.state.boardList[U.trim.path(props.state.updatePath)]
  return (
    <div>
      <div>{props.state.updatePath}{!!currentBoard && currentBoard.name}</div>
      <div>listBoards</div>
    </div>
  )
}


export default props => {
  const path = usePath()
  const isSmall = useMediaQuery('(max-width: 600px)')
  const isLarge = useMediaQuery('(min-width: 1000px)')
  const listBoards = () => {
    return Object.keys(props.state.boardList).map(board => {
      return <A key={board} className='board-link' href={`/${board}`}>{board}</A>})
  }
  const verboseMenu = () => {
    return (
      <ul className='board-list'>
      {listBoards()}
      <A className='board-link' href='/'>home</A>
      </ul>
    )
  }
  const currentBoard = () => {
    let board = Object.keys(props.boardList).find(board => {
      return props.state.updatePath === `/${board}`
    })
    return `/${board}`
  }
  const [open, setOpen] = useState(false)
  const compactMenu = () => {
    return (
      <div className='menu compact'>
        <span><FaHamburger size='2em'/></span>
        <BoardDropDown {...props}/>
        <span><FaSearch size='2em' /></span>
        <span><FaHandshake size='2em' /></span>
        <span><FaEllipsisV size='2em' /></span>
      </div>
    )
  }
  return isSmall ? compactMenu() : verboseMenu()
}
