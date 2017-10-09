import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import { Post } from '../../domain/model/Post'
import { dataLoadService } from '../../index'
import axios from 'axios'
import { API_ENDPOINT } from '../../constants/config'

export const updatePost = (post: Post, history: History, postId: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(updatePostRequested())
  try {
    await dataLoadService.getPostRepository().updatePost(postId, post)
    dispatch(updatePostSuccess())
    history.push('/myposts')
    await dataLoadService.getPostRepository().unlockPost(postId)
  } catch (error) {
    dispatch(updatePostFailed())
  }
})()

export const checkLock = (postId: string, history: History) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(updatePostRequested())
  const response = await axios.get(`${API_ENDPOINT}/posts/${postId}`)
  console.log(response)
  if (response.data.isLocked) {
    history.push('/')
  } else {
    await dataLoadService.getPostRepository().lockPost(postId)
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