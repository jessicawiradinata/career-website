import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import { Post } from '../../domain/model/Post'
import PostRepository from '../../domain/service/PostRepository'

const postRepository = new PostRepository()

export const getPostDetails = (postDetails: any) => (dispatch: Dispatch<any>) => (() => {
  dispatch(getPostDetailsAction(postDetails))
})()

export const getPostDetailsAction = (payload: any) => ({
  type: ActionTypes.GET_POST_DETAILS,
  payload,
})

export const updatePost = (post: Post, history: History, postId: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(updatePostRequested())
  try {
    await postRepository.updatePost(postId, post)
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