/**
 * A collection of global actions to handle posts
 */
import * as ActionTypes from '../constants/ActionTypes'
import { Dispatch } from 'redux'
import { dataLoadService } from '../index'
import { map } from 'lodash'

/**
 * Deletes a post
 * @param postId ID of post to be deleted
 */
export const deletePost = (postId: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(deletePostRequested())
  try {
    await dataLoadService.getPostRepository().deletePost(postId)
    dispatch(deletePostSuccess())
  } catch (error) {
    dispatch(deletePostFailed())
  }
})()

/**
 * Notifies that delete post has been requested
 */
export const deletePostRequested = () => {
  return { type: ActionTypes.DELETE_POST_REQUESTED }
}

/**
 * Notifies that delete post has been successful
 */
export const deletePostSuccess = () => {
  return { type: ActionTypes.DELETE_POST_SUCCESS }
}

/**
 * Notifies that delete post has failed
 */
export const deletePostFailed = () => {
  return { type: ActionTypes.DELETE_POST_FAILED }
}

/**
 * Passes a collection of posts to redux state
 * @param payload contains posts to be passed
 */
export const getPostsAction = (payload: any) => ({
  type: ActionTypes.GET_POSTS,
  payload,
})

/**
 * Searches location suggestions based on the search text
 * @param searchText search keyword
 */
export const searchLocation = (searchText: string) => (dispatch: Dispatch<any>) => (async () => {
  if (searchText !== '') {
    try {
      const response = await dataLoadService.getPostRepository().searchLocation(searchText)
      const locations = map(response.data.predictions, (location: any) => location.description)
      dispatch(searchLocationAction(locations))
    } catch (error) {
      console.log(error)
    }
  }
})()

/**
 * Passes a collection of locations to redux state
 * @param payload contains locations to be passed
 */
export const searchLocationAction = (payload: string[]) => ({
  type: ActionTypes.SEARCH_LOCATION,
  payload,
})