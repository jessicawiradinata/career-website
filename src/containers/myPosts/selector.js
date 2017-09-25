import { createStructuredSelector } from 'reselect'

const userPosts = state => state.user.userPosts
const deletePostStatus = state => state.post.deletePostStatus

export default createStructuredSelector({
  userPosts,
  deletePostStatus
})