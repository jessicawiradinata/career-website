/**
 * A collection of actions for the Signup page
 */
import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import { dataLoadService } from '../../index'

/**
 * Creates an account for the user
 * @param email email of user account
 * @param password password of user account
 * @param name name of user account
 * @param history navigation
 */
export const signup = (email: string, password: string, name: string, history: History) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(signupRequested())
  try {
    const response = await dataLoadService.getUserRepository().createUser(email, password, name)
    if (response.data.success) {
      dispatch(signupSuccess())
      history.push('/login')
    } else {
      dispatch(signupFailed())
    }
  } catch (error) {
    dispatch(signupFailed())
  }
})()

/**
 * Notifies that signup has been requested
 */
export const signupRequested = () => {
  return { type: ActionTypes.SIGNUP_REQUESTED }
}

/**
 * Notifies that signup has been successful
 */
export const signupSuccess = () => {
  return { type: ActionTypes.SIGNUP_SUCCESS }
}

/**
 * Notifies that signup has failed
 */
export const signupFailed = () => {
  return { type: ActionTypes.SIGNUP_FAILED }
}