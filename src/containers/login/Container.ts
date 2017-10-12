/**
 * Connects login page with the redux store and actions
 */
import { connect } from 'react-redux'
import LoginLayout from './Layout'
import { login, resetPassword } from './Action'
import { validateEmail, isEmpty } from '../../actions/Validation'
import { bindActionCreators } from 'redux'
import selector from './selector'

/**
 * Connects props from selector and actions to be used in login page
 */
export default connect(
  selector,
  dispatch => bindActionCreators({
    login,
    resetPassword,
    validateEmail,
    isEmpty,
   }, dispatch),
)(LoginLayout as any)