import React, { useEffect, useState } from 'react'
import { useRoutes, usePath } from 'hookrouter'

import Thread from './Thread'
import Catalog from './Catalog'

const routes = {
  '/': () => props => <Catalog {...props} />,
  '/:threadId': ({threadId}) => (props) => <Thread threadId={threadId} {...props} />
}

export default props => {
  const {send, subscriptions, readyState, dispatch, boardList} = props
  const path = usePath()
  const match = useRoutes(routes)
  const [ loaded, setLoaded ] = useState(false)
  const boardIdenifier = /^\/(\w+)/.exec(path)[1]
  if (readyState === 1 && !subscriptions.includes(boardIdenifier)) {
    send(boardIdenifier)
    dispatch({type: "subscribe", subscribe: boardIdenifier})
  }
  return (
    <div className='board' id={boardIdenifier} onClick={()=>dispatch({type: 'focus', focus: 'board'})}>
      { match({...boardList[boardIdenifier]}) }
    </div>
  )
}
