import { combineReducers } from 'redux'
import authentication from './authentication'
import user from './user'

export default combineReducers({
  authentication,
  user
})