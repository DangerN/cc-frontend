import React, { useEffect, useState } from 'react'
import { useRoutes, usePath } from 'hookrouter'

import Thread from './Thread'
import Catalog from './Catalog'

const routes = {
  '/': () => props => <Catalog {...props} />,
  '/:threadId': ({threadId}) => (props) => <Thread threadId={threadId} {...props} />
}

export default props => {
  const {send, subscriptions, readyState, dispatch} = props
  const path = usePath()
  const match = useRoutes(routes)
  const [ loaded, setLoaded ] = useState(false)
  const boardIdenifier = /^\/(\w+)/.exec(path)[1]
  if (!subscriptions.includes(boardIdenifier)) {
    console.log("suubing to ", boardIdenifier);
    dispatch({type: "subscribe", subscribe: boardIdenifier})
    send(boardIdenifier)
  }
  return (
    <div>
      { match({...props}) }
    </div>
  )
}
