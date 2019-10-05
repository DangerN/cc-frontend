import React, { useState } from 'react'
import {useRoutes} from 'hookrouter'

import Board from './components/Board.jsx'
import Home from './components/Home.jsx'

import {birds, boardList, boardNames} from './mock_data.js'
import logo from './logo.svg';
import './css/main.css';

const routes = {
  '/': () => <Home />,
  '/:board': ({board}) => <Board board={board}/>
}

export default () => {
  const initialState = {
    theme: 'light',
  }
  const [state, setState] = useState(initialState)
  const routeResult = useRoutes(routes)
  return routeResult || null
}
