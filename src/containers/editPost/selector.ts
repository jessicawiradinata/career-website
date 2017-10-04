import { createStructuredSelector, createSelector } from 'reselect'
import { find } from 'lodash'
import { State } from '../../store/State'
import { Post } from '../../domain/model/Post'

const postDetails = createSelector(
  (state: State) => state.post.posts,
  (_: State, props: any) => props.match.params.postId,
  (userPosts: Post[], postId: string) => find(userPosts, { '_id': postId }),
)

export default createStructuredSelector({
  postDetails,
})