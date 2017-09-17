import { connect } from 'react-redux'
import HomeLayout from './Layout'
import { bindActionCreators } from 'redux'
import * as Action from './Action'

export default connect(null, dispatch => bindActionCreators(Action, dispatch))(HomeLayout)