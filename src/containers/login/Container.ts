import { connect } from 'react-redux'
import LoginLayout from './Layout'
import { login } from './Action'
import { bindActionCreators } from 'redux'
import selector from './selector'

export default connect(
  selector,
  dispatch => bindActionCreators({
    login,
   }, dispatch),
)(LoginLayout)