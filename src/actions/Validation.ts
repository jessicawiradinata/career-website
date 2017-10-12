import * as ActionTypes from '../constants/ActionTypes'
import validator from 'validator'

export const validateEmail = (email: string, page: string) => {
  const isValid = validator.isEmail(email)
  switch (page) {
    case 'LOGIN':
      return isValid ? validLoginEmail() : invalidLoginEmail()
    case 'SIGNUP':
      return isValid ? validSignupEmail() : invalidSignupEmail()
    default:
      throw Error
  }
}

export const isEmpty = (text: string, component: string) => {
  const isEmpty = validator.isEmpty(text)
  switch (component) {
    case 'LOGIN_PASSWORD':
      return isEmpty ? invalidLoginPassword() : validLoginPassword()
    default:
      throw Error
  }
}

export const validLoginEmail = () => {
  return { type: ActionTypes.VALID_LOGIN_EMAIL }
}

export const validLoginPassword = () => {
  return { type: ActionTypes.VALID_LOGIN_PASSWORD }
}

export const invalidLoginEmail = () => {
  return { type: ActionTypes.INVALID_LOGIN_EMAIL }
}

export const invalidLoginPassword = () => {
  return { type: ActionTypes.INVALID_LOGIN_PASSWORD }
}

export const validSignupEmail = () => {
  return { type: ActionTypes.VALID_SIGNUP_EMAIL }
}

export const validSignupPassword = () => {
  return { type: ActionTypes.VALID_SIGNUP_PASSWORD }
}

export const validSignupName = () => {
  return { type: ActionTypes.INVALID_SIGNUP_NAME }
}

export const invalidSignupEmail = () => {
  return { type: ActionTypes.INVALID_SIGNUP_EMAIL }
}

export const invalidSignupPassword = () => {
  return { type: ActionTypes.INVALID_SIGNUP_PASSWORD }
}

export const invalidSignupName = () => {
  return { type: ActionTypes.INVALID_SIGNUP_NAME }
}