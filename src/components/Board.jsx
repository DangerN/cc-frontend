import React, { useState } from 'react'
import { useRoutes, usePath } from 'hookrouter'

import BoardList from './BoardList'
import Banner from './Banner'
import Thread from './Thread'

const routes = {
  '/:threadId': ({threadId}) => (props) => <Thread threadId={threadId} {...props} />
}

export default props => {
  const {send, subscriptions} = props
  console.log(props);
  const path = usePath()
  const match = useRoutes(routes)

  return (
    <div>
      { match({...props}) }
    </div>
  )
}
