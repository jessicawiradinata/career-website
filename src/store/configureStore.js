import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'remote-redux-devtools'
import RootReducer from '../reducers/index'

const isDebuggingInChrome = !!window.navigator.userAgent

export default function (initialState = {}, history) {
  return createStore(
    RootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(
      thunk,
      routerMiddleware(history),
      createLogger({
        predicate: () => isDebuggingInChrome,
        collapsed: true,
        duration: true,
      })
    ))
  )
}