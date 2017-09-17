import * as ActionTypes from '../../constants/ActionTypes'
import * as Config from '../../constants/config'

export const authenticate = (email, password, history) => (dispatch, _) => (async () => {
  try {
    dispatch(loginRequested())
    const response = await fetch(`${Config.API_ENDPOINT}/auth/login`, {
      method: Config.POST,
      headers: Config.HEADER,
      mode: 'cors',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    const responseJson = await response.json()
    const userAuth = { token: responseJson.token, id: responseJson.id }
    console.log(responseJson)
    if (responseJson.token !== null) {
      window.localStorage.setItem('token', responseJson.token)
      window.localStorage.setItem('id', responseJson.id)
      dispatch(loginSuccess())
      history.push('/')
    }
  } catch (e) {
    console.log(e)
    dispatch(loginFailed())
  }
  
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