import React from 'react'
import Post from './Post'
import Loading from './Loading'

export default props => {
  const { threads, threadId } = props
  const displayPosts = () => {
    const { posts } = threads.find(thread => {
      return threadId === thread.id.toString()
    })
    return posts.map(post => {
       return <Post key={post.id} {...post}/>
    })
  }
  return (
    <div className='thread'>
      { !!threads ? displayPosts() : <Loading type='thread' />}
    </div>
  )
}
