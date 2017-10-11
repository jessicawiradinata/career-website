import { combineReducers } from 'redux'
import authentication from './authentication'
import user from './user'
import post from './post'
import validation from './validation'
import { State } from '../store/State'

export default combineReducers<State>({
  authentication,
  user,
  post,
  validation,
})