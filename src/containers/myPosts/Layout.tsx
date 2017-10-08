import React, { Component } from 'react'
import Header from '../../components/Header'
import { map } from 'lodash'
import { History } from 'history'
import { User } from '../../domain/model/User'
import { Post } from '../../domain/model/Post'
import PostCard from '../../components/PostCard'

interface Props {
  history: History
  userPosts: Post[]
  deletePostStatus: boolean
  user: User
  authenticate: (history: History) => void
  logout: (history: History) => void
  deletePost: (postId: string) => void
}

interface State {}

export default class MyPostsLayout extends Component<Props, State> {
  componentWillMount() {
    const { authenticate, history } = this.props
    authenticate(history)
  }

  renderPostCards = () => {
    const { userPosts, deletePost, history, user } = this.props
    return map(userPosts, (post: Post) => {
      return (
        <PostCard
          key={post._id}
          post={post}
          history={history}
          onDelete={deletePost}
          showActions={true}
          authorName={user.name}
        />
      )
    })
  }

  render() {
    const { history, logout, user } = this.props
    const isAdmin = user ? user.isAdmin : false

    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} isAdmin={isAdmin} />
        {this.renderPostCards()}
      </div>
    )
  }
}