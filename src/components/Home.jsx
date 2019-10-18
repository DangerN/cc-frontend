import React from 'react'

import BoardList from './BoardList'
import Banner from './Banner'

export default props => {
  const announcements = () => {
    return props.announcements ? props.announcements : null
  }
  const longBoardList = () => {
    return (
      <div>
        hoome
      </div>
    )
  }
  return (
    <div>
      { announcements() }
      { longBoardList() }
    </div>
  )
}
