/**
 * A collection of actions for create post page
 */
import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import { Post } from '../../domain/model/Post'
import { dataLoadService } from '../../index'

/**
 * Creates a new post
 * @param post new post to be created
 * @param history navigation
 */
export const createPost = (post: Post, history: History) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(createPostRequested())
  try {
    const response = await dataLoadService.getPostRepository().createPost(post)
    if (response.data.success) {
      dispatch(createPostSuccess())
      history.push('/myposts')
    } else {
      dispatch(createPostFailed())
    }
  } catch (error) {
    dispatch(createPostFailed())
  }
})()

/**
 * Notifies that create post has been requested
 */
export const createPostRequested = () => {
  return { type: ActionTypes.CREATE_POST_REQUESTED }
}

/**
 * Notifies that create post has been successful
 */
export const createPostSuccess = () => {
  return { type: ActionTypes.CREATE_POST_SUCCESS }
}

/**
 * Notifies that create post has failed
 */
export const createPostFailed = () => {
  return { type: ActionTypes.CREATE_POST_FAILED }
}