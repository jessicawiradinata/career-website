/**
 * Provides state types for the redux store
 */
import { AuthenticationContainer } from '../reducers/authentication'
import { PostContainer } from '../reducers/post'
import { UserContainer } from '../reducers/user'

/**
 * Takes state types of all state returned by the reducers
 */
export interface State {
  authentication: AuthenticationContainer
  post: PostContainer
  user: UserContainer
}