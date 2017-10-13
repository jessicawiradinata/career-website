/**
 * A collection of actions for the login page
 */
import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import AuthenticationService from '../../domain/service/AuthenticationService'
import { dataLoadService } from '../../index'

const authenticationService = new AuthenticationService()

/**
 * Authenticates user and saves the token received from the server app and user ID in local storage
 * @param email email from user input
 * @param password password from user input
 * @param history navigation
 */
export const login = (email: string, password: string, history: History) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(loginRequested())
  try {
    const response = await authenticationService.login(email, password)
    if (response.data.token !== undefined) {
      window.localStorage.setItem('token', response.data.token)
      window.localStorage.setItem('id', response.data.id)
      await dataLoadService.getUserRepository().getUser(response.data.id)
      dispatch(loginSuccess())
      history.push('/')
    } else {
      dispatch(loginFailed())
    }
  } catch (error) {
    dispatch(loginFailed())
  }
})()

/**
 * Resets a user's password
 * @param email email address of the user
 */
export const resetPassword = (email: string) => (dispatch: Dispatch<any>) => (async () => {
  try {
    await authenticationService.resetPassword(email)
  } catch (error) {
    console.log(error)
  }
})()

/**
 * Notifies that login has been requested
 */
export const loginRequested = () => {
  return { type: ActionTypes.LOGIN_REQUESTED }
}

/**
 * Notifies that login has been successful
 */
export const loginSuccess = () => {
  return { type: ActionTypes.LOGIN_SUCCESS }
}

/**
 * Notifies that login has failed
 */
export const loginFailed = () => {
  return { type: ActionTypes.LOGIN_FAILED }
}
