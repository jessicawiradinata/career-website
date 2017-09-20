import * as ActionTypes from '../../constants/ActionTypes'
import * as Config from '../../constants/config'
import axios from 'axios'

export const authenticate = (email, password, history) => (dispatch, _) => (async () => {
  dispatch(loginRequested())
  axios.post(`${Config.API_ENDPOINT}/auth/login`, {
    email: email,
    password: password
  })
  .then(response => {
    if (response.data.token != null) {
      window.localStorage.setItem('token', response.data.token)
      window.localStorage.setItem('id', response.data.id)
      dispatch(loginSuccess())
      history.push('/')
    } else {
      dispatch(loginFailed())
    }
  })
  .catch(error => {
    dispatch(loginFailed())
  })
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
