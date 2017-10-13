/**
 * A selector which fetches data from redux store and maps it as a props for posts page
 */
import { createStructuredSelector, createSelector } from 'reselect'
import { map, find, assign } from 'lodash'
import { State } from '../../store/State'

/**
 * Finds author name based on the given user ID
 * @param users a collection of all existing users
 * @param authorId user ID of the post author
 */
const findAuthorName = (users: any, authorId: string) => {
  return find(users, { '_id': authorId })
}

/**
 * Assigns author name to a post
 * @param post post to be assigned
 * @param users a collection of all existing users
 */
const assignAuthorName = (post: any, users: any) => {
  const author: any = findAuthorName(users, post.authorId)
  if (author !== undefined) {
    return assign(post, { 'authorName': author.name })
  }
  return assign(post, { 'authorName': '[user deleted]' })
}

/**
 * Gets all posts from the redux store and adds author name to each post
 */
const posts = createSelector(
  (state: State) => state.post.posts,
  (state: State) => state.user.users,
  (posts: any, users: any) => map(posts, post => assignAuthorName(post, users)),
)

/**
 * Gets user state from the redux store and maps it to a prop for Posts page
 * @param state state from the redux store
 */
const user = (state: State) => state.user.user

/**
 * Exports props to be used by posts page
 */
export default createStructuredSelector({
  posts,
  user,
})