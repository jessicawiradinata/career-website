import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

type validateLoginAction = {
  type: ActionTypes.VALID_LOGIN_EMAIL | ActionTypes.VALID_LOGIN_PASSWORD | ActionTypes.INVALID_LOGIN_PASSWORD | ActionTypes.INVALID_LOGIN_EMAIL,
}

type validEmail = boolean
const validEmail = (state: validEmail = false, action: validateLoginAction) => {
  switch (action.type) {
  case ActionTypes.VALID_LOGIN_EMAIL:
    return true
  case ActionTypes.INVALID_LOGIN_EMAIL:
    return false
  default:
    return state
  }
}

type validPassword = boolean
const validPassword = (state: validPassword = false, action: validateLoginAction) => {
  switch (action.type) {
  case ActionTypes.VALID_LOGIN_PASSWORD:
    return true
  case ActionTypes.INVALID_LOGIN_PASSWORD:
    return false
  default:
    return state
  }
}

export type loginValidation = {
  validEmail: validEmail,
  validPassword: validPassword,
}

export type ValidationContainer = {
  loginValidation: loginValidation,
}

const loginValidation = combineReducers<loginValidation>({
  validEmail,
  validPassword,
})

export default combineReducers<ValidationContainer>({
  loginValidation,
})