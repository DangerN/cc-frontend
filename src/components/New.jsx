import React, { useState, useEffect } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import axios from 'axios'

import { NET } from '../constants'

const EditModal = props => {
  const { updatePath, postData, setPostData, setEditing, handleSubmit } = props
  const handleFormChange = (event, type) => {
    const handler = {
      title: event => {
        const title = event.target.value
        title.length < 40 && setPostData({...postData, title: title})
      },
      media: event => {
        const media = event.target.value
        media.length < 40 && setPostData({...postData, media: media})
      },
      text: event => {
        const text = event.target.value
        text.length < 2000 && setPostData({...postData, text: text})
      },
    }
    handler[type](event)
  }
  return (
    <form className='edit-modal' onSubmit={handleSubmit}>
      <FaPlusCircle size='30' onClick={()=>setEditing(false)}/>
      <input
        type='text'
        placeholder='title'
        value={postData.title || ""}
        onChange={event=>handleFormChange(event, 'title')}
      />
      <textarea
        placeholder='text'
        value={postData.text || ""}
        onChange={event=>handleFormChange(event, 'text')}
      />
      <input
        type='file'
        placeholder='media'
        value={postData.media || ""}
        onChange={event=>handleFormChange(event, 'media')}
      />
    <input type='submit' value='Post' />
    </form>
  )
}

export default props => {
  const { updatePath } = props.state
  const [ postData, setPostData ] = useState({title: null, media: null, text: null,})
  const [ editing, setEditing ] = useState(false)
  // const [ requestStatus, setRequestStatus ] = useState('ready')
  //
  // useEffect(() => {
  //   const yee = {
  //     'ready': () => {
  //       console.log('READY');
  //     },
  //     'sending': () => {
  //       console.log('SENDING');
  //       axios.get('http://0.0.0.0:9002/test', {
  //         // yeet: 'yeet'
  //       }).then(re => {
  //         console.log(re);
  //       })
  //     }
  //   }
  //   yee[requestStatus]()
  // }, [requestStatus])

  const handleNewResponse = {
    200: response => {
      console.log(response);
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    const path = updatePath.split("/")
    axios.get('http://0.0.0.0:9002/test', {
      // yeet: 'yeet'
    }).then(re => {
      console.log(re);
    })
    axios.post(NET.DBW.NEW, {
      ...postData,
      board: path[1],
      thread: path[2]
    }, {
      "Content-Type": "application/json"
    }).then(response => {
      handleNewResponse[response.status](response)
    }).catch(console.log)
  }

  return (
    <div className='new-button'>
      { editing
        ? <EditModal handleSubmit={handleSubmit} setEditing={setEditing} updatePath={updatePath} postData={postData} setPostData={setPostData} />
      : <FaPlusCircle size='50' onClick={()=>setEditing(true)}/>
      }
    </div>
  )
}
