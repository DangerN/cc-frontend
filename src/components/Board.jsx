import React from 'react'
import BoardList from './BoardList'

import { boardNames } from '../mock_data'

export default props => {
  console.log(props);
  return (
    <div>
    <BoardList />
      i a { boardNames[props.board] }board!
    </div>
  )
}
