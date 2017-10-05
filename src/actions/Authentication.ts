import { History } from 'history'
import AuthenticationService from '../domain/service/AuthenticationService'
import * as ActionTypes from '../constants/ActionTypes'
import { Dispatch } from 'redux'

const authenticationService = new AuthenticationService()

export const logout = (history: History) => (dispatch: Dispatch<any>) => (async () => {
  await authenticationService.logout()
  dispatch(logoutAction())
  history.push('/')
})()

export const logoutAction = () => ({
  type: ActionTypes.LOGOUT,
})

export const authenticate = (history: History) => (dispatch: Dispatch<any>) => (async () => {
  const isLoggedIn = await authenticationService.isLoggedIn()
  if (!isLoggedIn) {
    history.push('/')
  }
})()
