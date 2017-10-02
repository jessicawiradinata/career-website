import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

type loginStatusAction = {
  type: ActionTypes.LOGIN_REQUESTED | ActionTypes.LOGIN_SUCCESS | ActionTypes.LOGIN_FAILED,
}

const loginStatus = (state: boolean = false, action: loginStatusAction) => {
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

export type AuthenticationContainer = {
  loginStatus: boolean,
}

export default combineReducers<AuthenticationContainer>({
  loginStatus,
})