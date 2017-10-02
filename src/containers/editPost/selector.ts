import { createStructuredSelector, createSelector } from 'reselect'
import { find } from 'lodash'
import { State } from '../../store/State'

const postDetailsBackUp = (state: State) => state.post.postDetailsBackUp

const postDetails = createSelector(
  (state: State) => state.user.userPosts,
  (_: State, props: any) => props.match.params.postId,
  (userPosts: any, postId: string) => find(userPosts, { '_id': postId }),
)

export default createStructuredSelector({
  postDetails,
  postDetailsBackUp,
})