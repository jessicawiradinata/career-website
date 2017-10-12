/**
 * Layout for My Posts page
 */
import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import { map } from 'lodash'
import { History } from 'history'
import { User } from '../../domain/model/User'
import { Post } from '../../domain/model/Post'
import PostCard from '../../components/PostCard/PostCard'

/**
 * Props that can be passed to this layout and their types
 */
interface Props {
  history: History
  userPosts: Post[]
  deletePostStatus: boolean
  user: User
  authenticate: (history: History) => void
  logout: (history: History) => void
  deletePost: (postId: string) => void
}

/**
 * All states owned by this layout and their types
 */
interface State {}

export default class MyPostsLayout extends Component<Props, State> {

  /**
   * Authenticates user when entering My Posts page and redirects to home if not logged in
   */
  componentWillMount() {
    const { authenticate, history } = this.props
    authenticate(history)
  }

  /**
   * Maps all user's posts into Post Cards
   */
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

  /**
   * Renders My Posts page layout
   */
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