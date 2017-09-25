import * as ActionTypes from '../../constants/ActionTypes'
import * as Config from '../../constants/config'
import axios from 'axios'

export const logout = (history) => (dispatch, _) => (async () => {
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  dispatch(logoutAction())
  history.push('/')
})()

export const logoutAction = () => {
  return { type: ActionTypes.LOGOUT }
}

export const getPostDetails = (postId) => (dispatch, _) => (async () => {
  axios.get(`${Config.API_ENDPOINT}/posts/${postId}`)
  .then(response => {
    dispatch(getPostDetailsAction(response.data))
  })
  .catch(error => {
    console.log(error)
  })
})()

export const getPostDetailsAction = (payload) => ({
  type: ActionTypes.GET_POST_DETAILS,
  payload
}) 


export const updatePost = (title, description, history, postId) => (dispatch, _) => (async () => {
  dispatch(updatePostRequested())
  axios.put(`${Config.API_ENDPOINT}/posts/${postId}`, {
    title: title,
    description: description,
  })
  .then(response => {
    dispatch(updatePostSuccess())
    history.push('/myposts')
  })
  .catch(error => {
    dispatch(updatePostFailed())
  })
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