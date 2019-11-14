import React, { useState } from 'react'
import { A , usePath } from 'hookrouter'
import useMediaQuery from 'use-media-query-hook'
import { FaHamburger, FaSearch, FaEllipsisV, FaHandshake,FaCaretDown } from 'react-icons/fa'

import { U } from '../constants'

const BoardDropDown = props => {
  const [focus, setFocus] = props.useFocus
  let currentBoard = props.state.boardList[U.trim.path(props.state.updatePath)]
  const listBoards = () => {
    return Object.keys(props.state.boardList).map(board => {
      return <li key={board}>
        <A className='board-link' href={`/${board}`}>
          <span>{board}</span>
          <span>{props.state.boardList[board].name}</span>
        </A>
      </li>
    })
  }
  const toggleDropDown = () => {
    focus ? setFocus(null) : setFocus('dropDown')
  }
  const listStyle = () => {
    const open = {display: 'block'}
    const closed = {display: 'none'}
    return focus === 'dropDown' ? open : closed
  }
  return (
    <div>
      <span>{props.state.updatePath}</span>
      <span>{!!currentBoard && currentBoard.name}</span>
      <FaCaretDown onClick={toggleDropDown}/>
      <ul style={listStyle()}>{listBoards()}</ul>
    </div>
  )
}


export default props => {
  const path = usePath()
  const isSmall = useMediaQuery('(max-width: 600px)')
  const isLarge = useMediaQuery('(min-width: 1000px)')
  const listBoards = () => {
    return Object.keys(props.state.boardList).map(board => {
      return <li key={board}><A className='board-link' href={`/${board}`}>{board}</A></li>})
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
  const useFocus = useState(null)
  const compactMenu = () => {
    return (
      <div className='menu compact'>
        <span><FaHamburger size='1.6em'/></span>
        <BoardDropDown {...props} useFocus={useFocus}/>
        <span><FaSearch size='1.6em' /></span>
        <span><FaHandshake size='1.6em' /></span>
        <span><FaEllipsisV size='1.6em' /></span>
      </div>
    )
  }
  return isSmall ? compactMenu() : verboseMenu()
}
