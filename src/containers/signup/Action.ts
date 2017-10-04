import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import { dataLoadService } from '../../index'

export const signup = (email: string, password: string, name: string, history: History) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(signupRequested())
  try {
    await dataLoadService.getUserRepository().createUser(email, password, name)
    dispatch(signupSuccess())
    history.push('/login')
  } catch (error) {
    dispatch(signupFailed())
  }
})()

export const signupRequested = () => {
  return { type: ActionTypes.SIGNUP_REQUESTED }
}

export const signupSuccess = () => {
  return { type: ActionTypes.SIGNUP_SUCCESS }
}

export const signupFailed = () => {
  return { type: ActionTypes.SIGNUP_FAILED }
}