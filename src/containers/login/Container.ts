import { connect } from 'react-redux'
import LoginLayout from './Layout'
import { login, resetPassword } from './Action'
import { validateEmail } from '../../actions/Validation'
import { bindActionCreators } from 'redux'
import selector from './selector'

export default connect(
  selector,
  dispatch => bindActionCreators({
    login,
    resetPassword,
    validateEmail,
   }, dispatch),
)(LoginLayout as any)