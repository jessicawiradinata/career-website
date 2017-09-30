import * as ActionTypes from '../../constants/ActionTypes'
import * as Config from '../../constants/config'
import axios from 'axios'

export const getPosts = () => (dispatch, _) => (async () => {
  axios.get(`${Config.API_ENDPOINT}/posts`)
    .then(response => {
      dispatch(getPostsAction(response.data))
    })
    .catch(error => {
      console.log(error)
    })
})()

export const getUsers = () => (dispatch, _) => (async () => {
  axios.get(`${Config.API_ENDPOINT}/users`)
    .then(response => {
      dispatch(getUsersAction(response.data))
    })
    .catch(error => {
      console.log(error)
    })
})()

export const getUsersAction = (payload) => ({
  type: ActionTypes.GET_USERS,
  payload
}) 

export const getPostsAction = (payload) => ({
  type: ActionTypes.GET_POSTS,
  payload
}) 

export const logout = (history) => (dispatch, _) => (async () => {
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  dispatch(logoutAction())
  history.push('/')
})()

export const logoutAction = () => {
  return { type: ActionTypes.LOGOUT }
}