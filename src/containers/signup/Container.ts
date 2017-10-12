import { connect } from 'react-redux'
import SignupLayout from './Layout'
import { signup } from './Action'
import { validateEmail, validatePassword, validateName } from '../../actions/Validation'
import { bindActionCreators } from 'redux'
import selector from './selector'

export default connect(
  selector,
  dispatch => bindActionCreators({
    signup,
    validateEmail,
    validatePassword,
    validateName,
  }, dispatch),
)(SignupLayout as any)