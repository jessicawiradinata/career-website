import * as ActionTypes from '../../constants/ActionTypes'
import * as Config from '../../constants/config'
import axios from 'axios'

export const deletePost = (postId, history) => (dispatch, _) => (async () => {
  dispatch(deletePostRequested())
  axios.delete(`${Config.API_ENDPOINT}/posts/${postId}`)
    .then(response => {
      dispatch(deletePostSuccess())
      window.location.reload()
    })
    .catch(error => {
      dispatch(deletePostFailed())
    })
})()

export const logout = (history) => (dispatch, _) => (async () => {
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  dispatch(logoutAction())
  history.push('/')
})()

export const logoutAction = () => {
  return { type: ActionTypes.LOGOUT }
}

export const deletePostRequested = () => {
  return { type: ActionTypes.DELETE_POST_REQUESTED }
}

export const deletePostSuccess = () => {
  return { type: ActionTypes.DELETE_POST_SUCCESS }
}

export const deletePostFailed = () => {
  return { type: ActionTypes.DELETE_POST_FAILED }
}

export const getUserPosts = (userId) => (dispatch, _) => (async () => {
  axios.get(`${Config.API_ENDPOINT}/posts/users/${userId}`)
    .then(response => {
      console.log(response)
      dispatch(getUserPostsAction(response.data))
    })
    .catch(error => {
      console.log(error)
    })
})()

export const getUserPostsAction = (payload) => ({
  type: ActionTypes.GET_USER_POSTS,
  payload
}) 
