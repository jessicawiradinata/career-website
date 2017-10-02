import * as ActionTypes from '../../constants/ActionTypes'
import * as Config from '../../constants/config'
import axios from 'axios'
import { Dispatch } from 'redux'
import { History } from 'history'

export const getPosts = () => (dispatch: Dispatch<any>) => (async () => {
  axios.get(`${Config.API_ENDPOINT}/posts`)
    .then(response => {
      dispatch(getPostsAction(response.data))
    })
    .catch(error => {
      console.log(error)
    })
})()

export const getUsers = () => (dispatch: Dispatch<any>) => (async () => {
  axios.get(`${Config.API_ENDPOINT}/users`)
    .then(response => {
      dispatch(getUsersAction(response.data))
    })
    .catch(error => {
      console.log(error)
    })
})()

export const getUsersAction = (payload: any) => ({
  type: ActionTypes.GET_USERS,
  payload,
})

export const getPostsAction = (payload: any) => ({
  type: ActionTypes.GET_POSTS,
  payload,
})

export const logout = (history: History) => (dispatch: Dispatch<any>) => (async () => {
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  dispatch(logoutAction())
  history.push('/')
})()

export const logoutAction = () => {
  return { type: ActionTypes.LOGOUT }
}