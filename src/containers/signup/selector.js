import { createStructuredSelector } from 'reselect'

const signup = (state) => {
  return state.user.signup
}

export default createStructuredSelector({
  signup
})
