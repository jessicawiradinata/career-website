import { connect } from 'react-redux'
import LoginLayout from './Layout'
import * as Action from './Action'
import { bindActionCreators } from 'redux'
import selector from './selector'

export default connect(selector, dispatch => bindActionCreators(Action, dispatch))(LoginLayout)