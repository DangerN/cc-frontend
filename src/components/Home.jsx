import React from 'react'
import { A } from 'hookrouter'

export default props => {
  const announcements = () => {
    return props.announcements ? props.announcements : null
  }
  const longBoardList = () => {
    return Object.keys(props.boardList).map(board => {
      return <A key={board} className='board-link-long' href={`/${board}`}>{props.boardList[board].name}</A>})
  }
  return (
    <div id='home'>
      { announcements() }
      { longBoardList() }
    </div>
  )
}
