import { combineReducers } from 'redux'
import { User } from '../domain/model/User'
import { Post } from '../domain/model/Post'
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

type userAction = {
  type: ActionTypes.GET_USER | ActionTypes.LOGOUT,
  payload: User,
}

const initialUser: User = {
  _id: '',
  email: '',
  name: '',
  isAdmin: false,
}

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

type usersAction = {
  type: ActionTypes.GET_USERS | ActionTypes.LOGOUT,
  payload: User[],
}

const users = (state: User[] = [], action: usersAction) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return action.payload
    default:
      return state
  }
}

export type UserContainer = {
  signupStatus: boolean,
  userPosts: Post[],
  user: User,
  users: User[],
}

export default combineReducers<UserContainer>({
  signupStatus,
  user,
  users,
})