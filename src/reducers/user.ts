/**
 * A collection of reducers related to users
 * Takes a set of states and actions and returns the next state based on the action
 */
import { combineReducers } from 'redux'
import { User } from '../domain/model/User'
import { Post } from '../domain/model/Post'
import * as ActionTypes from '../constants/ActionTypes'

/**
 * Specifies the action types which can be included in the action
 */
type userAction = {
  type: ActionTypes.GET_USER | ActionTypes.LOGOUT,
  payload: User,
}

type usersAction = {
  type: ActionTypes.GET_USERS | ActionTypes.LOGOUT,
  payload: User[],
}

// Creates an empty User object to be set as initial user
const initialUser: User = {
  _id: '',
  email: '',
  name: '',
  isAdmin: false,
}

/**
 * Passes a payload carried by the action which contains a user
 * @param state user object to be returned
 * @param action action which triggers this method
 * @return payload containing passed user
 */
const user = (state: User = initialUser, action: userAction) => {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return action.payload
    case ActionTypes.LOGOUT:
      return {}
    default:
      return state
  }
}

/**
 * Passes a payload carried by the action which contains users
 * @param state a collection of users to be returned
 * @param action action which triggers this method
 * @return payload containing passed users
 */
const users = (state: User[] = [], action: usersAction) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return action.payload
    default:
      return state
  }
}

/**
 * Specifies all reducers and their return types
 */
export type UserContainer = {
  userPosts: Post[],
  user: User,
  users: User[],
}

/**
 * Exports reducers to be used in the application
 */
export default combineReducers<UserContainer>({
  user,
  users,
})