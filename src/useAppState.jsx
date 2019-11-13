import { useReducer } from 'react'

const useAppState = () => {
  const initialState = {
    theme: 'light',
    loaded: false,
    user: null,
    subscriptions: [],
    readyState: 3,
    boardList: {},
    errors: [],
    announce: "",
    updatePath: "/"
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'loaded':
        return {...state, loaded: action.loaded}
      case 'updateReadyState':
        return {...state, readyState: action.readyState}
      case 'updatePath':
        return {...state, updatePath: action.updatePath}
      case 'announce':
        return {...state, announce: action.announce}
      case 'boardList':
        return {...state, boardList: {...action.boardList, ...state.boardList}}
      case 'subscribe':
        return {...state, subscriptions: [...state.subscriptions, action.subscribe]}
      case 'boardDump':
        return {...state, boardList: {...state.boardList, ...action.boardDump}}
      case 'error':
        return {...state, errors: state.errors.push(action.error)}
      default:
        console.log(action);
        throw new Error('u fugged up lamao')
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}

export default useAppState
