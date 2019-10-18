import React from 'react'
import { useRoutes, A } from 'hookrouter'

export default () => {
  const stats = () => {
    return "muh stats"
  }
  const postPreview = props => {
    return "yeet yeet yeet yeet yeet yeet yeet yeet yeet yeet"
  }
  return (
    <div>
      <A ><img src='https://www.tinymountainhouses.com/wp-content/uploads/2015/07/placeholder.jpg'/>
      {props.subject}
      {stats}
      {postPreview}
    </div>
  )
}
