import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

type loginAction = {
  type: ActionTypes.LOGIN_REQUESTED | ActionTypes.LOGIN_SUCCESS | ActionTypes.LOGIN_FAILED,
}

type signupAction = {
  type: ActionTypes.SIGNUP_REQUESTED | ActionTypes.SIGNUP_SUCCESS | ActionTypes.SIGNUP_FAILED,
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

export type AuthenticationContainer = {
  isLoginProcessing: boolean,
  isLoginSuccess: boolean,
  isSignupProcessing: boolean,
  isSignupSuccess: boolean,
}

export default combineReducers<AuthenticationContainer>({
  isLoginProcessing,
  isLoginSuccess,
  isSignupProcessing,
  isSignupSuccess,
})