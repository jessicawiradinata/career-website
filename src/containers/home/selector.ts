/**
 * A selector which fetches data from redux store and maps it as a props for the home page
 */
import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

/**
 * Takes states from the redux store and maps it as a props for the home page
 * @param state state from redux store
 */
const user = (state: State) => state.user.user

/**
 * Exports props to be used by the home page
 */
export default createStructuredSelector({
  user,
})