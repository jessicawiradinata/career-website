import { createStructuredSelector } from 'reselect'

const loginStatus = (state) => {
  return state.authentication.login
}

export default createStructuredSelector({
  loginStatus
})
