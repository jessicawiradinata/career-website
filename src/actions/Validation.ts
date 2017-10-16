// TODO: might delete this file, validation may not need to involve reducers
import * as ActionTypes from '../constants/ActionTypes'
import validator from 'validator'

/**
 * Validates whether the text is a valid email address
 * @param text email to be validated
 * @return true if text is a valid email, false otherwise
 */
export const validateEmail = (text: string) => validator.isEmail(text)

/**
 * Validates whether the text is a valid password
 * @param text password to be validated
 * @return true if text is a valid password, false otherwise
 */
export const validatePassword = (text: string) => validator.isLength(text, { min: 6, max: 20 })

/**
 * Validates whether the text is a valid name
 * @param name name to be validated
 * @return true if text is a valid name, false otherwise
 */
export const validateName = (text: string) => validator.isLength(text, { min: 3, max: 70 })

export const isEmpty = (text: string, component: string) => {
  const isEmpty = validator.isEmpty(text)
  switch (component) {
    case 'LOGIN_PASSWORD':
      return isEmpty ? invalidLoginPassword() : validLoginPassword()
    default:
      console.log(Error)
      return Error
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
  return { type: ActionTypes.VALID_SIGNUP_NAME }
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