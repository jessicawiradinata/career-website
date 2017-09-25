import * as ActionTypes from '../../constants/ActionTypes'
import * as Config from '../../constants/config'
import axios from 'axios'

export const login = (email, password, history) => (dispatch, _) => (async () => {
  dispatch(loginRequested())
  axios.post(`${Config.API_ENDPOINT}/auth/login`, {
    email: email,
    password: password
  })
  .then(async (response) => {
    if (response.data.token != null) {
      window.localStorage.setItem('token', response.data.token)
      window.localStorage.setItem('id', response.data.id)
      await dispatch(getUserPosts(response.data.id))
      dispatch(loginSuccess())
      history.push('/')
    } else {
      dispatch(loginFailed())
    }
  })
  .catch(error => {
    dispatch(loginFailed())
  })
})()

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

export const loginRequested = () => {
  return { type: ActionTypes.LOGIN_REQUESTED }
}

export const loginSuccess = () => {
  return { type: ActionTypes.LOGIN_SUCCESS }
}

export const loginFailed = () => {
  return { type: ActionTypes.LOGIN_FAILED }
}

export const getUserPostsAction = (payload) => ({
  type: ActionTypes.GET_USER_POSTS,
  payload
}) 