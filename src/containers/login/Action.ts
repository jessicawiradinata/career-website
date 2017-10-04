import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import AuthenticationService from '../../domain/service/AuthenticationService'

const authenticationService = new AuthenticationService()

export const login = (email: string, password: string, history: History) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(loginRequested())
  try {
    const response = await authenticationService.login(email, password)
    if (response.data.token !== null) {
      window.localStorage.setItem('token', response.data.token)
      window.localStorage.setItem('id', response.data.id)
      dispatch(loginSuccess())
      history.push('/')
    } else {
      dispatch(loginFailed())
    }
  } catch (error) {
    dispatch(loginFailed())
  }
})()

export const loginRequested = () => {
  return { type: ActionTypes.LOGIN_REQUESTED }
}

export const loginSuccess = () => {
  return { type: ActionTypes.LOGIN_SUCCESS }
}

export const loginFailed = () => {
  return { type: ActionTypes.LOGIN_FAILED }
}
