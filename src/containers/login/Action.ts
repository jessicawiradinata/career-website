import * as ActionTypes from '../../constants/ActionTypes'
import * as Config from '../../constants/config'
import axios from 'axios'
import { History } from 'history'
import { Dispatch } from 'redux'
import { User } from '../../domain/model/User'
import AuthenticationService from '../../domain/service/AuthenticationService'

const authenticationService = new AuthenticationService()

export const login = (email: string, password: string, history: History) => (dispatch: Dispatch<any>) => (async () => {
  dispatch(loginRequested())
  try {
    const response = await authenticationService.login(email, password)
    if (response.data.token !== null) {
      window.localStorage.setItem('token', response.data.token)
      window.localStorage.setItem('id', response.data.id)
      dispatch(loginSuccess())
      dispatch(getUser(response.data.id))
      history.push('/')
    } else {
      dispatch(loginFailed())
    }
  } catch (error) {
    dispatch(loginFailed())
  }
})()

export const getUser = (userId: string) => (dispatch: Dispatch<any>) => (async () => {
  try {
    const response = await axios.get(`${Config.API_ENDPOINT}/users/${userId}`)
    dispatch(getUserAction(response.data))
  } catch (error) {
    console.log(error)
  }
})()

export const getUserAction = (payload: User) => ({
  type: ActionTypes.GET_USER,
  payload,
})

export const loginRequested = () => {
  return { type: ActionTypes.LOGIN_REQUESTED }
}

export const loginSuccess = () => {
  return { type: ActionTypes.LOGIN_SUCCESS }
}

export const loginFailed = () => {
  return { type: ActionTypes.LOGIN_FAILED }
}
