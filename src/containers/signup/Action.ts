import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import UserRepository from '../../domain/service/UserRepository'

const userRepository = new UserRepository()

export const signup = (email: string, password: string, name: string, history: History) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(signupRequested())
  try {
    const response = await userRepository.createUser(email, password, name)
    if (response.data.message !== null) {
      dispatch(signupSuccess())
      history.push('/login')
    } else {
      dispatch(signupFailed())
    }
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