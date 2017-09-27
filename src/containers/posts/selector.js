import { createStructuredSelector } from 'reselect'

const posts = state => state.post.posts

export default createStructuredSelector({
  posts
})