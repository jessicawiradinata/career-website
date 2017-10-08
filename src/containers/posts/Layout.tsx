import React, { Component } from 'react'
import { map } from 'lodash'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { Post } from '../../domain/model/Post'
import { User } from '../../domain/model/User'
import PostCard from '../../components/PostCard/PostCard'

interface Props {
  posts: Post[]
  history: History
  user: User
  logout: (history: History) => void
  deletePost: (postId: string) => void
}

interface State {}

export default class PostsLayout extends Component<Props, State> {
  renderPostCards = () => {
    const { posts, user, history, deletePost } = this.props
    const isAdmin = user ? user.isAdmin : false

    return map(posts, (post: any) => {
      return (
        <PostCard
          key={post._id}
          post={post}
          history={history}
          onDelete={deletePost}
          showActions={isAdmin}
          authorName={post.authorName}
        />
      )
    })
  }

  render() {
    const { history, logout, user } = this.props
    const isLoggedIn = window.localStorage.token !== undefined
    const isAdmin = user ? user.isAdmin : false

    return (
      <div>
        <Header history={history} isLoggedIn={isLoggedIn} logout={logout} isAdmin={isAdmin} />
        {this.renderPostCards()}
      </div>
    )
  }
}