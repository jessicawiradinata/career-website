import React, { Component } from 'react'
import { Card, CardTitle, CardActions, FlatButton, CardText } from 'material-ui'
import Header from '../../components/Header'
import { map } from 'lodash'

export default class MyPostsLayout extends Component {
  renderData = () => {
    const { userPosts, deletePost, history, user } = this.props
    return map(userPosts, (post) => {
      return (
        <div style={styles.postCard} key={post._id}>
          <Card>
            <CardTitle title={post.title} subtitle={`posted by ${user.name}`} actAsExpander showExpandableButton />
            <CardText expandable>
              {post.description}
            </CardText>
            <CardActions>
              <FlatButton label="Edit" primary onClick={() => history.push(`/editpost/${post._id}`)} />
              <FlatButton label="Delete" secondary onClick={() => deletePost(post._id, history)} />
            </CardActions>
          </Card> 
        </div>
      )
    })
  }

  componentWillMount() {
    const { getUserPosts } = this.props
    getUserPosts(window.localStorage.id)
  }

  render() {
    const { history, logout } = this.props
    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} />
        {this.renderData()}
      </div>
    )
  }
}

const styles = {
  postCard: {
    marginTop: 20
  }
}