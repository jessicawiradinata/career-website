import { AuthenticationContainer } from '../reducers/authentication'
import { PostContainer } from '../reducers/post'
import { UserContainer } from '../reducers/user'
import { ValidationContainer } from '../reducers/validation'

export interface State {
  authentication: AuthenticationContainer
  post: PostContainer
  user: UserContainer
  validation: ValidationContainer
}