import React, { useState, useEffect, useMemo } from 'react'
import { useRoutes } from 'hookrouter'
import useWebSocket from 'react-use-websocket'

import Board from './components/Board'
import Home from './components/Home'
import Banner from './components/Banner'
import BoardList from './components/BoardList'
import LoadingScreen from './components/LoadingScreen'
import useAppState from './useAppState'

import {birds, boardList, boardNames} from './mock_data.js'
import logo from './logo.svg'
import './css/main.css'

const routes = {
  '/': () => props => <Home {...props} />,
  '/:board*': ({board}) => (props) => <Board board={board} {...props} />
}

const CONNECTION_STATUS_CONNECTING = 0
const CONNECTION_STATUS_OPEN = 1
const CONNECTION_STATUS_CLOSING = 2
const CONNECTION_STATUS_CLOSED = 3

export default props => {
  const initialState = {
    theme: 'light',
    loaded: false,
    socketOpen: false,
    user: null,
    board: null,
    subscriptions: []
  }

  // this may not be needed as there us a useEffect hook that listens for readyState change.
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
  }) ,[])

  const [state, dispatch] = useAppState()
  const [messageHistory, setMessageHistory] = useState([])
  const [sendMessage, lastMessage, readyState] = useWebSocket('ws://0.0.0.0:42042', options)

  //lol how does this even work?
  const connectionStatus = {
    [CONNECTION_STATUS_CONNECTING]: 'Connecting',
    [CONNECTION_STATUS_OPEN]: 'Open',
    [CONNECTION_STATUS_CLOSING]: 'Closing',
    [CONNECTION_STATUS_CLOSED]: 'Closed',
  }[readyState]

  const match = useRoutes(routes)

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory(previous => previous.concat(lastMessage))
      console.log(JSON.parse(lastMessage.data))
    }
  }, [lastMessage])

  useEffect(() => {
    if (readyState !== state.readyState) {
      dispatch({type: 'updateReadyState', readyState: readyState})
    }
  }, [readyState])

  if (state.readyState === CONNECTION_STATUS_OPEN && !state.loaded) {
    sendMessage('base')
    dispatch({type: 'loaded', loaded: true})
  }

  return (
    <>
      <LoadingScreen loaded={state.loaded} />
      <BoardList />
      <Banner />
      {match({...state, send: sendMessage, dispatch: dispatch})}
    </>
  )
}
