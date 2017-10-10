import { connect } from 'react-redux'
import MyAccountLayout from './Layout'
import { bindActionCreators } from 'redux'
import Selector from './selector'
import { authenticate } from '../../actions/Authentication'

export default connect(
  Selector,
  dispatch => bindActionCreators({
    authenticate
   }, dispatch),
)(MyAccountLayout as any)