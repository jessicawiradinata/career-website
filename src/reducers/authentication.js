import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

const loginStatus = (state = false, action = {}) => {
  switch(action.type) {
    case ActionTypes.LOGIN_REQUESTED:
      return true
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.LOGIN_FAILED:
      return false
    default:
      return state
  }
}

export default combineReducers({
  loginStatus
})