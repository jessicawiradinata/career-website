/**
 * A collection of global actions to handle users
 */
import * as ActionTypes from '../constants/ActionTypes'

/**
 * Passes a single user to redux state
 * @param payload contains user to be passed
 */
export const getUserAction = (payload: any) => ({
  type: ActionTypes.GET_USER,
  payload,
})

/**
 * Passes a collection of users to redux state
 * @param payload contains users to be passed
 */
export const getUsersAction = (payload: any) => ({
  type: ActionTypes.GET_USERS,
  payload,
})