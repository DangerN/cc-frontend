import React, { useState } from 'react'
import { useRoutes } from 'hookrouter'
import useWebSocket from 'react-use-websocket'

import Board from './components/Board'
import Home from './components/Home'
import Banner from './components/Banner'
import BoardList from './components/BoardList'

import {birds, boardList, boardNames} from './mock_data.js'
import logo from './logo.svg';
import './css/main.css';

const routes = {
  '/': () => props => <Home {...props} />,
  '/:board*': ({board}) => (props) => <Board board={board} {...props} />
}

export default props => {
  const initialState = {
    theme: 'light',
    loaded: false,
    user: null,
    board: null,
  }
  const [state, setState] = useState(initialState)
  const options  = { onOpen: console.log }
  const [sendMessage, lastMessage, readyState] = useWebSocket('ws://0.0.0.0:42042')
  const match = useRoutes(routes)
  return (
    <>
      <BoardList />
      <Banner />
      {match(state)}
    </>
  )
}
