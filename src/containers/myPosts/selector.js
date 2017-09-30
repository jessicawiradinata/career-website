import { createStructuredSelector } from 'reselect'

const userPosts = state => state.user.userPosts
const deletePostStatus = state => state.post.deletePostStatus
const user = state => state.user.user

export default createStructuredSelector({
  userPosts,
  deletePostStatus,
  user
})