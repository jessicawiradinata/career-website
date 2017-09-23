import * as ActionTypes from '../../constants/ActionTypes'
import * as Config from '../../constants/config'
import axios from 'axios'

export const createPost = (title, description, authorId, history) => (dispatch, _) => (async () => {
  dispatch(createPostRequested())
  axios.post(`${Config.API_ENDPOINT}/posts`, {
    title: title,
    description: description,
    authorId: authorId
  })
  .then(response => {
    if (response.data.message != null) {
      dispatch(createPostSuccess())
      history.push('/')
    } else {
      dispatch(createPostFailed())
    }
  })
  .catch(error => {
    dispatch(createPostFailed())
  })
})

export const logout = (history) => (dispatch, _) => (async () => {
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  dispatch(logoutAction())
  history.push('/')
})

export const logoutAction = () => {
  return { type: ActionTypes.LOGOUT }
}

export const createPostRequested = () => {
  return { type: ActionTypes.CREATE_POST_REQUESTED }
}

export const createPostSuccess = () => {
  return { type: ActionTypes.CREATE_POST_SUCCESS }
}

export const createPostFailed = () => {
  return { type: ActionTypes.CREATE_POST_FAILED }
}