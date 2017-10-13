/**
 * Provides redux store for the application
 */
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'remote-redux-devtools'
import RootReducer from '../reducers/index'
import { autoRehydrate } from 'redux-persist'
import { History } from 'history'

const isDebuggingInChrome = !!window.navigator.userAgent

/**
 * Creates redux store to store global states used by the application
 * @param initialState empty redux state at the beginning of creation
 * @param history navigation
 * @return redux store
 */
export default function (initialState = {}, history: History) {
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
      }),
    // Retains states so that they are don't go back to initial state when page is refreshed
    ), autoRehydrate()),
  )
}