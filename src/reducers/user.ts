import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

type signupStatusAction = {
  type: ActionTypes.SIGNUP_REQUESTED | ActionTypes.SIGNUP_SUCCESS | ActionTypes.SIGNUP_FAILED,
}

const signupStatus = (state: boolean = false, action: signupStatusAction) => {
  switch (action.type) {
    case ActionTypes.SIGNUP_REQUESTED:
      return true
    case ActionTypes.SIGNUP_SUCCESS:
    case ActionTypes.SIGNUP_FAILED:
      return false
    default:
      return state
  }
}

type userPostsAction = {
  type: ActionTypes.GET_USER_POSTS | ActionTypes.LOGOUT
  payload: any,
}

const userPosts = (state: boolean = false, action: userPostsAction) => {
  switch (action.type) {
    case ActionTypes.GET_USER_POSTS:
      return action.payload
    case ActionTypes.LOGOUT:
      return {}
    default:
      return state
  }
}

type userAction = {
  type: ActionTypes.GET_USER | ActionTypes.LOGOUT,
  payload: any,
}

const user = (state: boolean = false, action: userAction) => {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return action.payload
    case ActionTypes.LOGOUT:
      return {}
    default:
      return state
  }
}

type usersAction = {
  type: ActionTypes.GET_USERS | ActionTypes.LOGOUT,
  payload: any,
}

const users = (state: boolean = false, action: usersAction) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return action.payload
    case ActionTypes.LOGOUT:
      return {}
    default:
      return state
  }
}

export type UserContainer = {
  signupStatus: boolean,
  userPosts: boolean,
  user: boolean,
  users: boolean,
}

export default combineReducers<UserContainer>({
  signupStatus,
  userPosts,
  user,
  users,
})