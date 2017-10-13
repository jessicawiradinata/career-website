/**
 * A collection of reducers related to posts
 * Takes a set of states and actions and returns the next state based on the action
 */
import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'
import { Post } from '../domain/model/Post'

/**
 * Specifies the action types which can be included in the action
 */
type createPostStatusAction = {
  type: ActionTypes.CREATE_POST_REQUESTED | ActionTypes.CREATE_POST_SUCCESS | ActionTypes.CREATE_POST_FAILED,
}

type deletePostStatusAction = {
  type: ActionTypes.DELETE_POST_REQUESTED | ActionTypes.DELETE_POST_SUCCESS | ActionTypes.DELETE_POST_FAILED,
}

type updatePostStatusAction = {
  type: ActionTypes.UPDATE_POST_SUCCESS | ActionTypes.UPDATE_POST_REQUESTED | ActionTypes.UPDATE_POST_FAILED,
}

type postsAction = {
  type: ActionTypes.GET_POSTS,
  payload: Post[],
}

type locationsAction = {
  type: ActionTypes.SEARCH_LOCATION,
  payload: string[],
}

/**
 * Notifies whether create post is currently processing
 * @param state state to be returned
 * @param action action which triggers this method
 * @return boolean true if create post is currently processing, false otherwise
 */
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

/**
 * Notifies whether delete post is currently processing
 * @param state state to be returned
 * @param action action which triggers this method
 * @return boolean true if delete post is currently processing, false otherwise
 */
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

/**
 * Notifies whether update post is currently processing
 * @param state state to be returned
 * @param action action which triggers this method
 * @return boolean true if update post is currently processing, false otherwise
 */
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

/**
 * Passes a payload carried by the action which contains posts
 * @param state a collection of posts to be returned
 * @param action action which triggers this method
 * @return payload containing passed posts
 */
const posts = (state: Post[] = [], action: postsAction) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      return action.payload
    default:
      return state
  }
}

/**
 * Passes a payload carried by the action which contains locations
 * @param state a collection of locations to be returned
 * @param action action which triggers this method
 * @return payload containing passed locations
 */
const locations = (state: string[] = [], action: locationsAction) => {
  switch (action.type) {
    case ActionTypes.SEARCH_LOCATION:
      return action.payload
    default:
      return state
  }
}

/**
 * Specifies all reducers and their return types
 */
export type PostContainer = {
  createPostStatus: boolean,
  deletePostStatus: boolean,
  updatePostStatus: boolean,
  posts: Post[],
  locations: string[],
}

/**
 * Exports reducers to be used in the application
 */
export default combineReducers<PostContainer>({
  createPostStatus,
  deletePostStatus,
  updatePostStatus,
  posts,
  locations,
})