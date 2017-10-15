/**
 * A collection of global actions to handle authentication
 */
import { History } from 'history'
import AuthenticationService from '../domain/service/AuthenticationService'
import * as ActionTypes from '../constants/ActionTypes'
import { Dispatch } from 'redux'

const authenticationService = new AuthenticationService()

/**
 * Logs out a user from the signed in account
 * @param history navigation
 */
export const logout = (history: History) => (dispatch: Dispatch<any>) => (async () => {
  await authenticationService.logout()
  dispatch(logoutAction())
  history.push('/')
})()

/**
 * Calls logout action type to be identified by reducers
 */
export const logoutAction = () => ({
  type: ActionTypes.LOGOUT,
})

/**
 * Redirects user to home page if not logged in
 * @param history navigation
 */
export const authenticate = (history: History) => (dispatch: Dispatch<any>) => (async () => {
  const isLoggedIn = await authenticationService.isLoggedIn()
  if (!isLoggedIn) {
    history.push('/')
  }
})()

/**
 * Redirects user to home page if not logged in
 * @param history navigation
 */
export const authenticateLoggedIn = (history: History) => (dispatch: Dispatch<any>) => (async () => {
  const isLoggedIn = await authenticationService.isLoggedIn()
  if (isLoggedIn) {
    history.push('/')
  }
})()

/**
 * Redirects user to home page if not owner of post or admin
 * @param history navigation
 * @param authorId user ID of post owner
 * @param isAdmin true if user is admin
 */
export const authorize = (history: History, authorId: string, isAdmin: boolean) => (dispatch: Dispatch<any>) => (async () => {
  const isOwner = await authenticationService.isOwner(authorId)
  if (!isOwner && !isAdmin) {
    history.push('/')
  }
})()
