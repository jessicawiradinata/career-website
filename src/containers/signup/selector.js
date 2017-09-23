import { createStructuredSelector } from 'reselect'

const signupStatus = (state) => {
  return state.user.signupStatus
}

export default createStructuredSelector({
  signupStatus
})
