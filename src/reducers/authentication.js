import { combineReducers } from 'redux'

const login = (state = false, action = {}) => {
  switch(action.type) {
    case 'LOGIN_REQUEST':
      return true
    case 'LOGIN_SUCCESS':
    case 'LOGIN_FAILED':
      return false
    default:
      return state
  }
}

export default combineReducers({
  login,
})