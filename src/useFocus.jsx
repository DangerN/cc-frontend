// Lets put a pin in this

import { useState, useEffect, useRef } from 'react'

export default ref => {
  const [ focus, setFocus ] = useState(false)
  const focusRef = useRef()

  useEffect(()=>{
      document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  return { focus, setFocus }
}
