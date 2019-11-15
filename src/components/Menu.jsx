import React, { useState, useEffect, useRef } from 'react'
import { A , usePath } from 'hookrouter'
import useMediaQuery from 'use-media-query-hook'
import { FaHamburger, FaSearch, FaEllipsisV, FaHandshake,FaCaretDown } from 'react-icons/fa'

import { U } from '../constants'

const BoardDropDown = props => {
  const [focus, setFocus] = props.useFocus
  const dropDownRef = useRef()
  let currentBoard = props.state.boardList[U.trim.path(props.state.updatePath)]

  const handleClick = event => {
    if (dropDownRef.current.contains(event.target)) {
      return
    }
    setFocus(null)
  }

  useEffect(()=>{
      document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const listBoards = () => {
    return Object.keys(props.state.boardList).map(board => {
      return <li key={board} onClick={toggleDropDown}>
        <A className='board-link' href={`/${board}`}>
          <span>/</span>
          <span className='board-path'>{board}</span>
          <span> - </span>
          <span className='board-name'>{props.state.boardList[board].name}</span>
        </A>
      </li>
    })
  }
  const toggleDropDown = () => {
    focus ? setFocus(null) : setFocus('dropDown')
  }
  const listStyle = () => {
    const open = {display: 'flex'}
    const closed = {display: 'none'}
    return focus === 'dropDown' ? open : closed
  }
  return (
    <div ref={dropDownRef} className='board-drop-down' onClick={toggleDropDown} >
      <div className='current-board-name'>
        <div className='board-path'>/{U.trim.path(props.state.updatePath)}</div>
        <div>_-_</div>
        <div className='board-name'>{!!currentBoard && currentBoard.name}</div>
        <FaCaretDown className='menu-carrot' size='1rem'/>
      </div>
      <ul className='board-list compact' style={listStyle()}>
        {listBoards()}
        <li><A className='board-link' href='/'>home</A></li>
      </ul>
    </div>
  )
}

const Search = props => {
  return (
    <div className='search' >
      <input className='text' type='text' />
      <FaSearch className='icon' size='1.6em' />
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
        <li><A className='board-link' href='/'>home</A></li>
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
        <div className='hamburger'><FaHamburger size='1.6em'/></div>
        <BoardDropDown {...props} useFocus={useFocus}/>
        <Search {...props} useFocus={useFocus}/>
        <div className='network'><FaHandshake size='1.6em' /></div>
        <div className='options'><FaEllipsisV size='1.6em' /></div>
      </div>
    )
  }
  return isSmall ? compactMenu() : verboseMenu()
}
