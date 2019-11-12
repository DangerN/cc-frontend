import React from 'react'
import { A } from 'hookrouter'

export default props => {
  const { id, name, threads } = props
  console.log(props);
  console.log(threads);
  const catalogCards = () => {
    return threads.map(thread => {
      let firstPost = thread.posts[0]
      console.log(firstPost)

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
       {!!threads ? catalogCards() : "something isnt right"}
    </div>
  )
}
