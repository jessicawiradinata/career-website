/**
 * A selector which fetches data from redux store and maps it as a props for My Account page
 */
import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'
import { User } from '../../domain/model/User'

interface StateProps {
  isChangeNameProcessing: boolean
  isChangeNameSuccess: boolean
  isChangePassSuccess: boolean
  user: User
}

/**
 * Gets states from the redux store and maps them to props for My Account page
 * @param state state from redux store
 */
const user = (state: State) => state.user.user
const isChangeNameProcessing = (state: State) => state.authentication.isChangeNameProcessing
const isChangeNameSuccess = (state: State) => state.authentication.isChangeNameSuccess
const isChangePassSuccess = (state: State) => state.authentication.isChangePassSuccess

/**
 * Exports props to be used by My Account page
 */
export default createStructuredSelector<State, StateProps>({
  user,
  isChangeNameProcessing,
  isChangeNameSuccess,
  isChangePassSuccess,
})