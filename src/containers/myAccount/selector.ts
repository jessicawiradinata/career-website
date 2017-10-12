/**
 * A selector which fetches data from redux store and maps it as a props for My Account page
 */
import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

/**
 * Takes states from the redux store and maps it as a props for the My Account page
 * @param state state from redux store
 */
const user = (state: State) => state.user.user

/**
 * Exports props to be used by My Account page
 */
export default createStructuredSelector({
  user,
})