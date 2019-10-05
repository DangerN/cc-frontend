import React from 'react'

import BoardList from './BoardList'

export default props => {
  const ws = new WebSocket('ws://localhost:3000')
  return (
    <div>
      <BoardList boards={props.boardList} />
    </div>
  )
}
