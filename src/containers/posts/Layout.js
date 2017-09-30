import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'material-ui'
import { map } from 'lodash'
import Header from '../../components/Header'

export default class PostsLayout extends Component {
  renderData = () => {
    const { posts } = this.props
    return map(posts, (post) => {
      return (
        <div style={styles.postCard} key={post._id}>
          <Card>
            <CardTitle title={post.title} subtitle={`posted by ${post.authorName}`} actAsExpander showExpandableButton />
            <CardText expandable>
              {post.description}
            </CardText>
          </Card> 
        </div>
      )
    })
  }

  componentWillMount() {
    const { getPosts, getUsers } = this.props
    getPosts()
    getUsers()
  }

  render() {
    const { history, logout } = this.props
    const isLoggedIn = localStorage.token != null

    return (
      <div>
        <Header history={history} isLoggedIn={isLoggedIn} logout={logout} />
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