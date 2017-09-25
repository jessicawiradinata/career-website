import { createStructuredSelector } from 'reselect'

const postDetails = state => state.post.postDetails

export default createStructuredSelector({
  postDetails
})