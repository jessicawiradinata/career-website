import * as ActionTypes from '../constants/ActionTypes'

export const getPostsAction = (payload: any) => ({
  type: ActionTypes.GET_POSTS,
  payload,
})