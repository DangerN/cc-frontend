import React, { useState, useEffect, useMemo } from 'react'
import { useRoutes, usePath } from 'hookrouter'
import useWebSocket from 'react-use-websocket'

import Board from './components/Board'
import Home from './components/Home'
// eslint-disable-next-line
import Banner from './components/Banner'
import Menu from './components/Menu'
import Loading from './components/Loading'
import useAppState from './useAppState'

import './css/main.css'
import './css/loading_screen.css'

const routes = {
  '/': () => props => <Home {...props} />,
  '/:board*': ({board}) => (props) => <Board board={board} {...props} />
}

// const CONNECTION_STATUS_CONNECTING = 0
const CONNECTION_STATUS_OPEN = 1
// const CONNECTION_STATUS_CLOSING = 2
// const CONNECTION_STATUS_CLOSED = 3

export default props => {
  const [state, dispatch] = useAppState()
  const [messageHistory, setMessageHistory] = useState([])
  const match = useRoutes(routes)

  const options = useMemo(() => ({
    onOpen: event =>  {
      dispatch({type: 'updateReadyState', readyState: 1})
    },
    onClose: event => {
      dispatch({type: 'updateReadyState', readyState: 0})
    },
    onError: error => {
      console.log('Socket Error', error);
    }
  }) , [dispatch])
  const [sendMessage, lastMessage, readyState] = useWebSocket('ws://0.0.0.0:42042', options)

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory(previous => previous.concat(lastMessage))
      let message = JSON.parse(lastMessage.data)
      const messageStack = Object.entries(message)
      for (const [action, data] of messageStack) {
        dispatch({type: action, [action]: data})
      }
    }
  }, [lastMessage, dispatch])

  useEffect(() => {
    if (Object.keys(state.boardList).length > 0) {
      dispatch({type: 'loaded', loaded: true})
    }
  }, [state.boardList])

  useEffect(() => {
    if (readyState !== state.readyState) {
      dispatch({type: 'updateReadyState', readyState: readyState})
    }
    if (state.readyState === CONNECTION_STATUS_OPEN && !state.loaded) {
      sendMessage('base')
    }
  }, [readyState])

  const path = usePath()
  useEffect(() => {
    dispatch({type: 'updatePath', updatePath: path})
  }, [path])

  return (
    <>
      <Loading type='screen' loaded={state.loaded} />
      <Menu boardList={state.boardList} state={state} send={sendMessage} dispatch={dispatch} />
      <Loading
        type='banner'
        format='wide'
        link={"https://businessbeyondlimits.com/wp-content/uploads/2015/02/400x100.gif"}
        useLoad={useState(false)}
      />
      {match({...state, send: sendMessage, dispatch: dispatch})}
    </>
  )
}
