/**
 * A collection of reducers related to authentication
 * Takes a set of states and actions and returns the next state based on the action
 */
import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

/**
 * Specifies the action types which can be included in the action
 */
type loginAction = {
  type: ActionTypes.LOGIN_REQUESTED | ActionTypes.LOGIN_SUCCESS | ActionTypes.LOGIN_FAILED,
}

type signupAction = {
  type: ActionTypes.SIGNUP_REQUESTED | ActionTypes.SIGNUP_SUCCESS | ActionTypes.SIGNUP_FAILED,
}

type changePassAction = {
  type: ActionTypes.CHANGE_PASSWORD_REQUESTED | ActionTypes.CHANGE_PASSWORD_SUCCESS | ActionTypes.CHANGE_PASSWORD_FAILED,
}

type changeNameAction = {
  type: ActionTypes.CHANGE_NAME_REQUESTED | ActionTypes.CHANGE_NAME_SUCCESS | ActionTypes.CHANGE_NAME_FAILED,
}

/**
 * Notifies whether login is currently processing
 * @param state state to be returned
 * @param action action which triggers this method
 * @return boolean true if login is currently processing, false otherwise
 */
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

/**
 * Notifies whether signup is currently processing
 * @param state state to be returned
 * @param action action which triggers this method
 * @return boolean true if signup is currently processing, false otherwise
 */
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

/**
 * Notifies whether signup is currently processing
 * @param state state to be returned
 * @param action action which triggers this method
 * @return boolean true if signup is currently processing, false otherwise
 */
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

const isChangeNameProcessing = (state: boolean = false, action: changeNameAction) => {
  switch (action.type) {
    case ActionTypes.CHANGE_NAME_REQUESTED:
      return true
    case ActionTypes.CHANGE_NAME_SUCCESS:
      return false
    default:
      return state
  }
}

/**
 * Notifies whether login is successful
 * @param state state to be returned
 * @param action action which triggers this method
 * @return boolean true if login is successful, false otherwise
 */
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

/**
 * Notifies whether signup is successful
 * @param state state to be returned
 * @param action action which triggers this method
 * @return boolean true if signup is successful, false otherwise
 */
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

/**
 * Notifies whether change password is successful
 * @param state state to be returned
 * @param action action which triggers this method
 * @return boolean true if change password is successful, false otherwise
 */
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

const isChangeNameSuccess = (state: boolean = true, action: changeNameAction) => {
  switch (action.type) {
    case ActionTypes.CHANGE_NAME_SUCCESS:
      return true
    case ActionTypes.CHANGE_NAME_FAILED:
      return false
    default:
      return true
  }
}

/**
 * Specifies all reducers and their return types
 */
export type AuthenticationContainer = {
  isLoginProcessing: boolean,
  isLoginSuccess: boolean,
  isSignupProcessing: boolean,
  isSignupSuccess: boolean,
  isChangePassProcessing: boolean,
  isChangePassSuccess: boolean,
  isChangeNameProcessing: boolean,
  isChangeNameSuccess: boolean,
}

/**
 * Exports reducers to be used in the application
 */
export default combineReducers<AuthenticationContainer>({
  isLoginProcessing,
  isLoginSuccess,
  isSignupProcessing,
  isSignupSuccess,
  isChangePassProcessing,
  isChangePassSuccess,
  isChangeNameProcessing,
  isChangeNameSuccess,
})