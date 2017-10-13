// TODO: might delete this file, validation may not need to involve reducers
import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

type validateLoginAction = {
  type: ActionTypes.VALID_LOGIN_EMAIL | ActionTypes.VALID_LOGIN_PASSWORD |
    ActionTypes.INVALID_LOGIN_PASSWORD | ActionTypes.INVALID_LOGIN_EMAIL,
}

type validateSignupAction = {
  type: ActionTypes.VALID_SIGNUP_EMAIL | ActionTypes.VALID_SIGNUP_PASSWORD |
    ActionTypes.INVALID_SIGNUP_PASSWORD | ActionTypes.INVALID_SIGNUP_EMAIL |
    ActionTypes.VALID_SIGNUP_NAME | ActionTypes.INVALID_SIGNUP_NAME ,
}

type validLoginEmail = boolean
const validLoginEmail = (state: validLoginEmail = false, action: validateLoginAction) => {
  switch (action.type) {
  case ActionTypes.VALID_LOGIN_EMAIL:
    return true
  case ActionTypes.INVALID_LOGIN_EMAIL:
    return false
  default:
    return state
  }
}

type validLoginPassword = boolean
const validLoginPassword = (state: validLoginPassword = false, action: validateLoginAction) => {
  switch (action.type) {
  case ActionTypes.VALID_LOGIN_PASSWORD:
    return true
  case ActionTypes.INVALID_LOGIN_PASSWORD:
    return false
  default:
    return state
  }
}

type validSignupEmail = boolean
const validSignupEmail = (state: validSignupEmail = false, action: validateSignupAction) => {
  switch (action.type) {
  case ActionTypes.VALID_SIGNUP_EMAIL:
    return true
  case ActionTypes.INVALID_SIGNUP_EMAIL:
    return false
  default:
    return state
  }
}

type validSignupPassword = boolean
const validSignupPassword = (state: validSignupPassword = false, action: validateSignupAction) => {
  switch (action.type) {
  case ActionTypes.VALID_SIGNUP_PASSWORD:
    return true
  case ActionTypes.INVALID_SIGNUP_PASSWORD:
    return false
  default:
    return state
  }
}

type validSignupName = boolean
const validSignupName = (state: validSignupName = false, action: validateSignupAction) => {
  switch (action.type) {
  case ActionTypes.VALID_SIGNUP_NAME:
    return true
  case ActionTypes.INVALID_SIGNUP_NAME:
    return false
  default:
    return state
  }
}

export type loginValidation = {
  validLoginEmail: validLoginEmail,
  validLoginPassword: validLoginPassword,
}

const loginValidation = combineReducers<loginValidation>({
  validLoginEmail,
  validLoginPassword,
})

export type signupValidation = {
  validSignupEmail: validSignupEmail,
  validSignupPassword: validSignupPassword,
  validSignupName: validSignupName,
}

const signupValidation = combineReducers<signupValidation>({
  validSignupEmail,
  validSignupPassword,
  validSignupName,
})

export type ValidationContainer = {
  loginValidation: loginValidation,
  signupValidation: signupValidation,
}

export default combineReducers<ValidationContainer>({
  loginValidation,
  signupValidation,
})