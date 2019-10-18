import React from 'react'
import { useRoutes, A } from 'hookrouter'

import BoardList from './BoardList'
import Banner from './Banner'
import Thread from './Thread'

import { boardNames } from '../mock_data'

const routes = {
  '/:threadId': () => <Thread />
}

export default props => {
  console.log(props);
  const match = useRoutes(routes)
  const listThreads = () => {

  }
  return (
    <div>
      { match }
    </div>
  )
}
