import { createStructuredSelector, createSelector } from 'reselect'
import { map, find, assign } from 'lodash'

const findAuthorName = (users, authorId) => {
  return find(users, { '_id': authorId })
}

const assignAuthorName = (post, users) => {
  const author = findAuthorName(users, post.authorId)
  if (author !== undefined) {
    return assign(post, { 'authorName': author.name })
  }
  return assign(post, { 'authorName': '[user deleted]' })
}

const posts = createSelector(
  state => state.post.posts,
  state => state.user.users,
  (posts, users) => map(posts, post => assignAuthorName(post, users))
)

export default createStructuredSelector({
  posts
})