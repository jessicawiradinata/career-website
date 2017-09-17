import { createStructuredSelector } from 'reselect'

const login = (state) => {
  return state.authentication.login
}

export default createStructuredSelector({
  login
})
