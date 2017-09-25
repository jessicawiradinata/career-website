import { createStructuredSelector } from 'reselect'

const userPosts = state => state.user.userPosts

export default createStructuredSelector({
  userPosts
})