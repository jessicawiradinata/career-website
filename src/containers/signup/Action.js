import * as ActionTypes from '../../constants/ActionTypes'
import * as Config from '../../constants/config'
import axios from 'axios'

export const signup = (email, password, name, history) => (dispatch, _) => (async () => {
  dispatch(signupRequested())
  axios.post(`${Config.API_ENDPOINT}/users`, {
    email: email,
    password: password,
    name: name
  })
  .then(response => {
    if (response.data.message != null) {
      dispatch(signupSuccess())
      history.push('/login')
    } else {
      dispatch(signupFailed())
    }
  })
  .catch(error => {
    dispatch(signupFailed())
  })
})()

export const signupRequested = () => {
  return { type: ActionTypes.SIGNUP_REQUESTED }
}

export const signupSuccess = () => {
  return { type: ActionTypes.SIGNUP_SUCCESS }
}

export const signupFailed = () => {
  return { type: ActionTypes.SIGNUP_FAILED }
}