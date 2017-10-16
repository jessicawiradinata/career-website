/**
 * Entry point of all the reducers
 */
import { combineReducers } from 'redux'
import authentication from './authentication'
import user from './user'
import post from './post'
import { State } from '../store/State'

/**
 * Exports all reducers to be used in the application
 */
export default combineReducers<State>({
  authentication,
  user,
  post,
})