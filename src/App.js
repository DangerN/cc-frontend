import React, { useEffect } from 'react';
import useSocket from 'use-socket.io-client';
import { useImmer } from 'use-immer';

import logo from './logo.svg';
import './App.css';

export default () => {
  const [socket] = useSocket('https://127.0.0.1:1234')
  socket.connect()
  return (
    <p>
    yeet
    </p>
  )
}
