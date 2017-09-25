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

const deletePostStatus = (state = false, action = {}) => {
  switch(action.type) {
    case ActionTypes.DELETE_POST_REQUESTED:
      return true
    case ActionTypes.DELETE_POST_SUCCESS:
    case ActionTypes.DELETE_POST_FAILED:
      return false
    default:
      return state
  }
}

const postDetails = (state = false, action = {}) => {
  switch(action.type) {
    case ActionTypes.GET_POST_DETAILS:
      return action.payload
    case ActionTypes.LOGOUT:
      return {}
    default:
      return state
  }
}

const updatePostStatus = (state = false, action = {}) => {
  switch(action.type) {
    case ActionTypes.UPDATE_POST_REQUESTED:
      return true
    case ActionTypes.UPDATE_POST_SUCCESS:
    case ActionTypes.UPDATE_POST_FAILED:
      return false
    default:
      return state
  }
}

export default combineReducers({
  createPostStatus,
  deletePostStatus,
  postDetails,
  updatePostStatus
})