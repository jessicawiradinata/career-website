import { connect } from 'react-redux'
import SignupLayout from './Layout'
import * as Action from './Action'
import { bindActionCreators } from 'redux'
import selector from './selector'

export default connect(selector, dispatch => bindActionCreators(Action, dispatch))(SignupLayout)