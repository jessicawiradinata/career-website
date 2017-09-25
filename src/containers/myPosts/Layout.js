import React, { Component } from 'react'
import { Card, CardTitle, CardActions, FlatButton, CardText } from 'material-ui'
import Header from '../../components/Header'
import { map } from 'lodash'

export default class MyPostsLayout extends Component {
  renderData = () => {
    const { userPosts } = this.props
    return map(userPosts, (post) => {
      return (
        <Card style={styles.postCard}>
          <CardTitle title={post.title} subtitle={post.authorId} />
          <CardText>
            {post.description}
          </CardText>
          <CardActions>
            <FlatButton label="Edit" primary />
            <FlatButton label="Delete" secondary />
          </CardActions>
        </Card> 
      )
    })
  }

  render() {
    console.log(this.props)
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