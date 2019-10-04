import React, { useEffect } from 'react';
import useSocket from 'use-socket.io-client';
import { useImmer } from 'use-immer';

import logo from './logo.svg';
import './App.css';

export default () => {
  const [socket] = useSocket('ws//0.0.0.0:3000')
  socket.connect()
  console.log(socket);

  // useEffect(()=>{
  //   socket.on('yeet', ()=>{alert('yeet')})
  // })

  return (
    <p>
    yee
    </p>
  )
}
