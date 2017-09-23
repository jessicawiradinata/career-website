import { createStructuredSelector } from 'reselect'

const createPostStatus = (state) => {
  return state.post.createPostStatus
}

export default createStructuredSelector({
  createPostStatus
})
