import { connect } from 'react-redux'
import PostsLayout from './Layout'
import { bindActionCreators } from 'redux'
import { getPosts, getUsers, logout } from './Action'
import selector from './selector'

export default connect(
  selector,
  dispatch => bindActionCreators({
    getPosts,
    getUsers,
    logout,
  }, dispatch),
)(PostsLayout)