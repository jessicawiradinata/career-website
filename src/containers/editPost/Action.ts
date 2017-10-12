/**
 * A collection of actions for edit post page
 */
import * as ActionTypes from '../../constants/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import { Post } from '../../domain/model/Post'
import { dataLoadService } from '../../index'

/**
 * Updates a post with new values
 * @param post new post to replace data from old post
 * @param history navigation
 * @param postId ID of post to be updated
 */
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

/**
 * Notifies that update post has been requested
 */
export const updatePostRequested = () => {
  return { type: ActionTypes.UPDATE_POST_REQUESTED }
}

/**
 * Notifies that update post has been successful
 */
export const updatePostSuccess = () => {
  return { type: ActionTypes.UPDATE_POST_SUCCESS }
}

/**
 * Notifies that update post has failed
 */
export const updatePostFailed = () => {
  return { type: ActionTypes.UPDATE_POST_FAILED }
}