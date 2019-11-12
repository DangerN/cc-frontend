import React from 'react'
import { A } from 'hookrouter'

// import { boardList } from '../mock_data'

export default props => {
  const listBoards = () => {
    return Object.keys(props.boardList).map(board => {
      return <A key={board} className='board-link' href={`/${board}`}>{board}</A>})
  }
  return (
    <ul className='board-list'>
      {listBoards()}
      <A className='board-link' href='/'>home</A>
    </ul>
  )
}
