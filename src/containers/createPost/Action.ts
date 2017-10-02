import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import { Post } from '../../domain/model/Post'
import PostRepository from '../../domain/service/PostRepository'

const postRepository = new PostRepository()

export const createPost = (post: Post, history: History) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(createPostRequested())
  try {
    const response = await postRepository.createPost(post)
    if (response.data.message !== null) {
      dispatch(createPostSuccess())
      history.push('/myposts')
    } else {
      dispatch(createPostFailed())
    }
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