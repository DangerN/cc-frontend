import React, { useReducer } from 'react'

const useAppState = () => {
  const initialState = {
    theme: 'light',
    loaded: false,
    user: null,
    subscriptions: [],
    readyState: 3,
    boardList: {},
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'loaded':
        return {...state, loaded: action.loaded}
      case 'updateReadyState':
        return {...state, readyState: action.readyState}
      case 'boardList':
        return {...state, boardList: action.boardList}
      default:
        console.log(action);
        throw new Error('u fugged up lamao')
    }
    return state
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}

export default useAppState
