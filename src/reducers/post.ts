import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

type createPostStatusAction = {
  type: ActionTypes.CREATE_POST_REQUESTED | ActionTypes.CREATE_POST_SUCCESS | ActionTypes.CREATE_POST_FAILED,
}

const createPostStatus = (state: boolean = false, action: createPostStatusAction) => {
  switch (action.type) {
    case ActionTypes.CREATE_POST_REQUESTED:
      return true
    case ActionTypes.CREATE_POST_SUCCESS:
    case ActionTypes.CREATE_POST_FAILED:
      return false
    default:
      return state
  }
}

type deletePostStatusAction = {
  type: ActionTypes.DELETE_POST_REQUESTED | ActionTypes.DELETE_POST_SUCCESS | ActionTypes.DELETE_POST_FAILED,
}

const deletePostStatus = (state: boolean = false, action: deletePostStatusAction) => {
  switch (action.type) {
    case ActionTypes.DELETE_POST_REQUESTED:
      return true
    case ActionTypes.DELETE_POST_SUCCESS:
    case ActionTypes.DELETE_POST_FAILED:
      return false
    default:
      return state
  }
}

type postDetailsBackUpAction = {
  type: ActionTypes.GET_POST_DETAILS | ActionTypes.GET_POST_DETAILS_REQUESTED | ActionTypes.LOGOUT,
  payload: any,
}

const postDetailsBackUp = (state: boolean = false, action: postDetailsBackUpAction) => {
  switch (action.type) {
    case ActionTypes.GET_POST_DETAILS:
      return action.payload
    case ActionTypes.LOGOUT:
    case ActionTypes.GET_POST_DETAILS_REQUESTED:
      return {}
    default:
      return state
  }
}

type updatePostStatusAction = {
  type: ActionTypes.UPDATE_POST_SUCCESS | ActionTypes.UPDATE_POST_REQUESTED | ActionTypes.UPDATE_POST_FAILED,
}

const updatePostStatus = (state: boolean = false, action: updatePostStatusAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_POST_REQUESTED:
      return true
    case ActionTypes.UPDATE_POST_SUCCESS:
    case ActionTypes.UPDATE_POST_FAILED:
      return false
    default:
      return state
  }
}

type postsAction = {
  type: ActionTypes.GET_POSTS,
  payload: any,
}

const posts = (state: boolean = false, action: postsAction) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      return action.payload
    default:
      return state
  }
}

export type PostContainer = {
  createPostStatus: boolean,
  deletePostStatus: boolean,
  postDetailsBackUp: boolean,
  updatePostStatus: boolean,
  posts: boolean,
}

export default combineReducers<PostContainer>({
  createPostStatus,
  deletePostStatus,
  postDetailsBackUp,
  updatePostStatus,
  posts,
})