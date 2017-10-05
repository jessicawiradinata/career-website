import * as ActionTypes from '../constants/ActionTypes'

export const getUserAction = (payload: any) => ({
  type: ActionTypes.GET_USER,
  payload,
})

export const getUsersAction = (payload: any) => ({
  type: ActionTypes.GET_USERS,
  payload,
})