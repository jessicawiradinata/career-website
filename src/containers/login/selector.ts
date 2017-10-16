/**
 * A selector which fetches data from redux store and maps it as a props for the login page
 */
import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

/**
 * Props that will be used by the login page and their types
 */
interface StateProps {
  isLoginProcessing: boolean
  isLoginSuccess: boolean
}

/**
 * Takes states from the redux store and maps them as props for the login page
 * @param state state from redux store
 */
const isLoginProcessing = (state: State) => state.authentication.isLoginProcessing
const isLoginSuccess = (state: State) => state.authentication.isLoginSuccess

/**
 * Exports props to be used by the login page
 */
export default createStructuredSelector<State, StateProps>({
  isLoginProcessing,
  isLoginSuccess,
})
