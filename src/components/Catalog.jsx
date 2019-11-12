import React from 'react'
import { A } from 'hookrouter'

import Loading from './Loading'

export default props => {
  const { id, name, threads } = props
  const catalogCards = () => {
    return threads.map(thread => {
      let firstPost = thread.posts[0]
      return (<div key={thread.id} className='catalog-card'>
        <A href={`/${id}/${thread.id}`}>
          <p>{thread.id}</p>
          <p>{firstPost.text}</p>
        </A>
      </div>)
    })
  }
  return (
    <div className='catalog'>
       {!!threads ? catalogCards() : <Loading type='catalog' />}
    </div>
  )
}
