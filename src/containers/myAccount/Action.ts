import * as ActionTypes from '../../constants/ActionTypes'
import { Dispatch } from 'redux'
import AuthenticationService from '../../domain/service/AuthenticationService'

const authenticationService = new AuthenticationService()

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

export const changePasswordRequested = () => {
  return { type: ActionTypes.CHANGE_PASSWORD_REQUESTED }
}

export const changePasswordSuccess = () => {
  return { type: ActionTypes.CHANGE_PASSWORD_SUCCESS }
}

export const changePasswordFailed = () => {
  return { type: ActionTypes.CHANGE_PASSWORD_FAILED }
}