import { createStructuredSelector, createSelector } from 'reselect'
import { map, find, assign } from 'lodash'
import { State } from '../../store/State'

const findAuthorName = (users: any, authorId: string) => {
  return find(users, { '_id': authorId })
}

const assignAuthorName = (post: any, users: any) => {
  const author: any = findAuthorName(users, post.authorId)
  if (author !== undefined) {
    return assign(post, { 'authorName': author.name })
  }
  return assign(post, { 'authorName': '[user deleted]' })
}

const posts = createSelector(
  (state: State) => state.post.posts,
  (state: State) => state.user.users,
  (posts: any, users: any) => map(posts, post => assignAuthorName(post, users)),
)

export default createStructuredSelector({
  posts,
})