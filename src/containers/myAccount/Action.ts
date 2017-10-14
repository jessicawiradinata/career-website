/**
 * A collection of actions for the My Account page
 */
import * as ActionTypes from '../../constants/ActionTypes'
import { Dispatch } from 'redux'
import AuthenticationService from '../../domain/service/AuthenticationService'
import UserRepository from '../../domain/service/UserRepository'

const authenticationService = new AuthenticationService()
const userRepository = new UserRepository()

/**
 * Changes a user's password
 * @param email email of the user
 * @param currentPass user's current password
 * @param newPass user's new password
 */
export const changePassword = (email: string, currentPass: string, newPass: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(changePasswordRequested())
  try {
    const response = await authenticationService.changePassword(email, currentPass, newPass)
    if (response.data !== null) {
      dispatch(changePasswordSuccess())
    } else {
      dispatch(changePasswordFailed())
    }
  } catch (error) {
    dispatch(changePasswordFailed())
  }
})()

/**
 * Changes a user's name
 * @param name name of the user account
 */
export const changeName = (newName: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(changeNameRequested())
  try {
    const response = await userRepository.changeName(window.localStorage.id, newName)
    if (response !== null) {
      dispatch(changeNameSuccess())
    } else {
      dispatch(changeNameFailed())
    }
  } catch (error) {
    dispatch(changeNameFailed())
  }
})()

/**
 * Notifies that change password has been requested
 */
export const changePasswordRequested = () => {
  return { type: ActionTypes.CHANGE_PASSWORD_REQUESTED }
}

/**
 * Notifies that change password has been successful
 */
export const changePasswordSuccess = () => {
  return { type: ActionTypes.CHANGE_PASSWORD_SUCCESS }
}

/**
 * Notifies that change password has failed
 */
export const changePasswordFailed = () => {
  return { type: ActionTypes.CHANGE_PASSWORD_FAILED }
}

/**
 * Notifies that change name has been requested
 */
export const changeNameRequested = () => {
  return { type: ActionTypes.CHANGE_NAME_REQUESTED }
}

/**
 * Notifies that change name has been successful
 */
export const changeNameSuccess = () => {
  return { type: ActionTypes.CHANGE_NAME_SUCCESS }
}

/**
 * Notifies that change name has failed
 */
export const changeNameFailed = () => {
  return { type: ActionTypes.CHANGE_NAME_FAILED }
}