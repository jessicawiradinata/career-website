/**
 * Connects My Account page with the redux store and actions
 */
import { connect } from 'react-redux'
import MyAccountLayout from './Layout'
import { bindActionCreators } from 'redux'
import Selector from './selector'
import { authenticate } from '../../actions/Authentication'
import { changePassword } from './Action'
import { changeName } from './Action'

/**
 * Connects props from selector and actions to be used in My Account page
 */
export default connect(
  Selector,
  dispatch => bindActionCreators({
    authenticate,
    changePassword,
    changeName,
   }, dispatch),
)(MyAccountLayout as any)