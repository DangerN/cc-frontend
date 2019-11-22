import React from 'react'
import { A , usePath } from 'hookrouter'
import useMediaQuery from 'use-media-query-hook'
import { FaHamburger, FaSearch, FaEllipsisV, FaHandshake,FaCaretDown } from 'react-icons/fa'

import { U } from '../constants'

const BoardDropDown = props => {
  let currentBoard = props.state.boardList[U.trim.path(props.state.updatePath)]

  const listBoards = () => {
    return Object.keys(props.state.boardList).map(board => {
      return <li key={board} >
        <A className='board-link' href={`/${board}`}>
          <span>/</span>
          <span className='board-path'>{board}</span>
          <span> - </span>
          <span className='board-name'>{props.state.boardList[board].name}</span>
        </A>
      </li>
    })
  }

  const listStyle = () => {
    const open = {display: 'flex'}
    const closed = {display: 'none'}
    return props.state.focus === 'board-list' ? open : closed
  }

  return (
    <div className='board-drop-down' onClick={()=>{
      props.dispatch({type: 'focus', focus: 'board-list'})
    }} >
      <div className='current-board-name'>
        <div className='board-path'>/{U.trim.path(props.state.updatePath)}</div>
        <div>-</div>
        <div className='board-name'>{!!currentBoard && currentBoard.name}</div>
        <FaCaretDown className='menu-carrot' size='1rem'/>
      </div>
      <ul className='board-list compact' style={listStyle()} onClick={event=>{
        event.stopPropagation()
        props.state.focus === 'board-list'
          ? props.dispatch({type: 'focus', focus: ""})
          : props.dispatch({type: 'focus', focus: "board-list"})
      }}>
        {listBoards()}
        <li><A className='board-link' href='/'>home</A></li>
      </ul>
    </div>
  )
}

const Search = props => {
  return (
    <div className='search' onClick={()=>props.dispatch({type: 'focus', focus: 'search'})}>
      <input className={props.state.focus === 'search' ? 'text open' : 'text'}
        type='text'
        value={props.state.searchTerm}
        onChange={event=>props.dispatch({type: 'updateSearchTerm', value: event.target.value})}/>
      <FaSearch
        className='icon'
        size='1.6em'
        onClick={event=>{
          event.stopPropagation()
          props.state.focus === 'search'
            ? props.dispatch({type: 'focus', focus: ""})
            : props.dispatch({type: 'focus', focus: "search"})
        }}/>
    </div>
  )
}


export default props => {
  const path = usePath()
  const isSmall = useMediaQuery('(max-width: 600px)')
  // eslint-disable-next-line
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
  const compactMenu = () => {
    return (
      <div className='menu compact'>
        <div className='hamburger'><FaHamburger size='1.6em'/></div>
        <BoardDropDown {...props} />
        <Search {...props} />
        <div className='network'><FaHandshake size='1.6em' /></div>
        <div className='options'><FaEllipsisV size='1.6em' /></div>
      </div>
    )
  }
  return isSmall ? compactMenu() : verboseMenu()
}
