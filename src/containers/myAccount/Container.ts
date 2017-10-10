import { connect } from 'react-redux'
import MyAccountLayout from './Layout'
import { bindActionCreators } from 'redux'
import Selector from './selector'

export default connect(
  Selector,
  dispatch => bindActionCreators({
   }, dispatch),
)(MyAccountLayout as any)