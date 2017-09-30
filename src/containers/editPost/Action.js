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

export const getPostDetails = (postDetails) => (dispatch, _) => (() => {
  dispatch(getPostDetailsAction(postDetails))
})()

export const getPostDetailsAction = (payload) => ({
  type: ActionTypes.GET_POST_DETAILS,
  payload
})

export const updatePost = (title, remuneration, workType, closingDate, description, howToApply, history, postId) => (dispatch, _) => (async () => {
  dispatch(updatePostRequested())
  axios.put(`${Config.API_ENDPOINT}/posts/${postId}`, {
    title: title,
    remuneration: remuneration,
    workType: workType,
    closingDate: closingDate,
    description: description,
    howToApply: howToApply,
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

export const getPostDetailsRequested = () => {
  return { type: ActionTypes.GET_POST_DETAILS_REQUESTED }
}

export const getPostDetailsSuccess = () => {
  return { type: ActionTypes.GET_POST_DETAILS_SUCCESS }
}

export const getPostDetailsFailed = () => {
  return { type: ActionTypes.GET_POST_DETAILS_FAILED }
}