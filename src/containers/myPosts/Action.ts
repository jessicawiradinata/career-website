import * as ActionTypes from '../../constants/ActionTypes'
import { Dispatch } from 'redux'
import { Post } from '../../domain/model/Post'
import PostRepository from '../../domain/service/PostRepository'

const postRepository = new PostRepository()

export const deletePost = (postId: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(deletePostRequested())
  try {
    await postRepository.deletePost(postId)
    dispatch(deletePostSuccess())
    window.location.reload()
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

export const getUserPosts = (userId: string) => (dispatch: Dispatch<any>) => (async () => {
  try {
    const response = await postRepository.getUserPosts(userId)
    dispatch(getUserPostsAction(response.data))
  } catch (error) {
    console.log(error)
  }
})()

export const getUserPostsAction = (payload: Post[]) => ({
  type: ActionTypes.GET_USER_POSTS,
  payload,
})
