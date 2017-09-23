import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

const signupStatus = (state = false, action = {}) => {
  switch(action.type) {
    case ActionTypes.SIGNUP_REQUESTED:
      return true
    case ActionTypes.SIGNUP_SUCCESS:
    case ActionTypes.SIGNUP_FAILED:
      return false
    default:
      return state
  }
}

export default combineReducers({
  signupStatus
})