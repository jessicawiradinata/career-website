/**
 * A selector which fetches data from redux store and maps it as a props for Create Post page
 */
import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'
import { User } from '../../domain/model/User'

/**
 * Props that will be used by Create Post page and their types
 */
interface StateProps {
  createPostStatus: any
  user: User
}

/**
 * Takes states from the redux store and maps them as props for Create Post page
 * @param state state from redux store
 */
const createPostStatus = (state: State) => state.post.createPostStatus
const user = (state: State) => state.user.user

/**
 * Exports props to be used by Create Post page
 */
export default createStructuredSelector<State, StateProps>({
  createPostStatus,
  user,
})
