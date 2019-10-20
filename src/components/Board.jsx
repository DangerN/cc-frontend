import React, { useState } from 'react'
import { useRoutes, usePath } from 'hookrouter'

import BoardList from './BoardList'
import Banner from './Banner'
import Thread from './Thread'

import { boardNames } from '../mock_data'

const routes = {
  '/:threadId': () => <Thread />
}

export default props => {
  const {send, socketOpen, subscriptions} = props
  const path = usePath()
  const match = useRoutes(routes)
  console.log('path', path);
  console.log('socket status', socketOpen);
  console.log('subs', subscriptions);
  const subscribe = () => {
    subscriptions.push(path)
  }
  socketOpen && !subscriptions.includes(path) && subscribe()
  const listThreads = () => {

  }
  console.log(path);
  return (
    <div>
      { match }
    </div>
  )
}
