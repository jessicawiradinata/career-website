import * as ActionTypes from '../constants/ActionTypes'

export const getUsersAction = (payload: any) => ({
  type: ActionTypes.GET_USERS,
  payload,
})