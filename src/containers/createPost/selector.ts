import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

interface StateProps {
  createPostStatus: any
}

const createPostStatus = (state: State) => state.post.createPostStatus

export default createStructuredSelector<State, StateProps>({
  createPostStatus,
})
