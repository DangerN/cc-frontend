import React, { useState } from 'react'
import { A , usePath } from 'hookrouter'
import useMediaQuery from 'use-media-query-hook'

export default props => {
  const path = usePath()
  const isSmall = useMediaQuery('(max-width: 600px)')
  const listBoards = () => {
    return Object.keys(props.boardList).map(board => {
      return <A key={board} className='board-link' href={`/${board}`}>{board}</A>})
  }
  const fullList = () => {
    return (
      <ul className='board-list'>
      {listBoards()}
      <A className='board-link' href='/'>home</A>
      </ul>
    )
  }
  const [open, setOpen] = useState(false)
  const compactList = () => {
    return (
      <div>
        Im a compact list!
      </div>
    )
  }
  return isSmall ? compactList() : fullList()
}
