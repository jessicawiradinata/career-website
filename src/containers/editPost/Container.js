import { connect } from 'react-redux'
import EditPostLayout from './Layout'
import { bindActionCreators } from 'redux'
import * as Action from './Action'
import selector from './selector'

export default connect(selector, dispatch => bindActionCreators(Action, dispatch))(EditPostLayout)