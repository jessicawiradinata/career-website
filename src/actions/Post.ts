import * as ActionTypes from '../constants/ActionTypes'
import { Dispatch } from 'redux'
import { dataLoadService } from '../index'

export const deletePost = (postId: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(deletePostRequested())
  try {
    await dataLoadService.getPostRepository().deletePost(postId)
    dispatch(deletePostSuccess())
  } catch (error) {
    dispatch(deletePostFailed())
  }
})()

export const deletePostRequested = () => {
  return { type: ActionTypes.DELETE_POST_REQUESTED }
}

export const deletePostSuccess = () => {
  return { type: ActionTypes.DELETE_POST_SUCCESS }
}

export const deletePostFailed = () => {
  return { type: ActionTypes.DELETE_POST_FAILED }
}

export const getPostsAction = (payload: any) => ({
  type: ActionTypes.GET_POSTS,
  payload,
})