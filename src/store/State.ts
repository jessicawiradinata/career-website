import { AuthenticationContainer } from '../reducers/authentication'
import { PostContainer } from '../reducers/post'
import { UserContainer } from '../reducers/user'

export interface State {
  authentication: AuthenticationContainer,
  post: PostContainer,
  user: UserContainer
}