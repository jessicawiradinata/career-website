import { combineReducers } from 'redux'
import authentication from './authentication'
import user from './user'
import post from './post'

export default combineReducers({
  authentication,
  user,
  post
})