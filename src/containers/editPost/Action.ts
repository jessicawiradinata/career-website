import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import { Post } from '../../domain/model/Post'
import { dataLoadService } from '../../index'

export const updatePost = (post: Post, history: History, postId: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(updatePostRequested())
  try {
    await dataLoadService.getPostRepository().updatePost(postId, post)
    dispatch(updatePostSuccess())
    history.push('/myposts')
  } catch (error) {
    dispatch(updatePostFailed())
  }
})()

export const updatePostRequested = () => {
  return { type: ActionTypes.UPDATE_POST_REQUESTED }
}

export const updatePostSuccess = () => {
  return { type: ActionTypes.UPDATE_POST_SUCCESS }
}

export const updatePostFailed = () => {
  return { type: ActionTypes.UPDATE_POST_FAILED }
}