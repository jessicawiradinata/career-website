import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

type loginAction = {
  type: ActionTypes.LOGIN_REQUESTED | ActionTypes.LOGIN_SUCCESS | ActionTypes.LOGIN_FAILED,
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

export type AuthenticationContainer = {
  loginStatus: boolean,
  isLoginProcessing: boolean,
  isLoginSuccess: boolean,
}

export default combineReducers<AuthenticationContainer>({
  isLoginProcessing,
  isLoginSuccess,
})