/**
 * A collection of global actions to handle authentication
 */
import { History } from 'history'
import * as ActionTypes from '../constants/ActionTypes'
import { Dispatch } from 'redux'

/**
 * Logs out a user from the signed in account
 * @param history navigation
 */
export const logout = (history: History) => (dispatch: Dispatch<any>) => (() => {
  localStorage.removeItem('token')
  localStorage.removeItem('id')
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
export const authenticate = (history: History) => (dispatch: Dispatch<any>) => (() => {
  const isLoggedIn = window.localStorage.token !== undefined
  if (!isLoggedIn) {
    history.push('/')
  }
})()

/**
 * Redirects user to home page if logged in
 * @param history navigation
 */
export const authenticateLoggedIn = (history: History) => (dispatch: Dispatch<any>) => (() => {
  const isLoggedIn = window.localStorage.token !== undefined
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
export const authorize = (history: History, authorId: string, isAdmin: boolean) => (dispatch: Dispatch<any>) => (() => {
  const isOwner = window.localStorage.id === authorId
  if (!isOwner && !isAdmin) {
    history.push('/')
  }
})()
