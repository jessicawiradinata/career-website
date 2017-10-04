import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import { Post } from '../../domain/model/Post'
import { dataLoadService } from '../../index'

export const createPost = (post: Post, history: History) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(createPostRequested())
  try {
    await dataLoadService.getPostRepository().createPost(post)
    dispatch(createPostSuccess())
    history.push('/myposts')
  } catch (error) {
    dispatch(createPostFailed())
  }
})()

export const createPostRequested = () => {
  return { type: ActionTypes.CREATE_POST_REQUESTED }
}

export const createPostSuccess = () => {
  return { type: ActionTypes.CREATE_POST_SUCCESS }
}

export const createPostFailed = () => {
  return { type: ActionTypes.CREATE_POST_FAILED }
}