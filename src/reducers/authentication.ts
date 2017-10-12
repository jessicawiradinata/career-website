import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

type loginAction = {
  type: ActionTypes.LOGIN_REQUESTED | ActionTypes.LOGIN_SUCCESS | ActionTypes.LOGIN_FAILED,
}

type signupAction = {
  type: ActionTypes.SIGNUP_REQUESTED | ActionTypes.SIGNUP_SUCCESS | ActionTypes.SIGNUP_FAILED,
}

type changePassAction = {
  type: ActionTypes.CHANGE_PASSWORD_REQUESTED | ActionTypes.CHANGE_PASSWORD_SUCCESS | ActionTypes.CHANGE_PASSWORD_FAILED,
}

const isLoginProcessing = (state: boolean = false, action: loginAction) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUESTED:
      return true
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.LOGIN_FAILED:
      return false
    default:
      return state
  }
}

const isSignupProcessing = (state: boolean = false, action: signupAction) => {
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

const isChangePassProcessing = (state: boolean = false, action: changePassAction) => {
  switch (action.type) {
    case ActionTypes.CHANGE_PASSWORD_REQUESTED:
      return true
    case ActionTypes.CHANGE_PASSWORD_SUCCESS:
      return false
    default:
      return state
  }
}

const isLoginSuccess = (state: boolean = true, action: loginAction) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return true
    case ActionTypes.LOGIN_FAILED:
      return false
    default:
      return true
  }
}

const isSignupSuccess = (state: boolean = true, action: signupAction) => {
  switch (action.type) {
    case ActionTypes.SIGNUP_SUCCESS:
      return true
    case ActionTypes.SIGNUP_FAILED:
      return false
    default:
      return true
  }
}

const isChangePassSuccess = (state: boolean = true, action: changePassAction) => {
  switch (action.type) {
    case ActionTypes.CHANGE_PASSWORD_SUCCESS:
      return true
    case ActionTypes.CHANGE_PASSWORD_FAILED:
      return false
    default:
      return true
  }
}

export type AuthenticationContainer = {
  isLoginProcessing: boolean,
  isLoginSuccess: boolean,
  isSignupProcessing: boolean,
  isSignupSuccess: boolean,
  isChangePassProcessing: boolean,
  isChangePassSuccess: boolean,
}

export default combineReducers<AuthenticationContainer>({
  isLoginProcessing,
  isLoginSuccess,
  isSignupProcessing,
  isSignupSuccess,
  isChangePassProcessing,
  isChangePassSuccess,
})