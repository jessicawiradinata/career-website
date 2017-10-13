/**
 * A collection of actions for the My Account page
 */
import * as ActionTypes from '../../constants/ActionTypes'
import { Dispatch } from 'redux'
import AuthenticationService from '../../domain/service/AuthenticationService'

const authenticationService = new AuthenticationService()

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