import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

const createPostStatus = (state = false, action = {}) => {
  switch(action.type) {
    case ActionTypes.CREATE_POST_REQUESTED:
      return true
    case ActionTypes.CREATE_POST_SUCCESS:
    case ActionTypes.CREATE_POST_FAILED:
      return false
    default:
      return state
  }
}

export default combineReducers({
  createPostStatus
})