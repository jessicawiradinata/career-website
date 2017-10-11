import React, { Component } from 'react'
import { Paper } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { Post } from '../../domain/model/Post'
import { User } from '../../domain/model/User'
import PostForm from '../../components/PostForm/PostForm'
import { styles } from './styles'

interface Props {
  history: History
  createPostStatus: boolean
  user: User
  authenticate: (history: History) => void
  logout: (history: History) => void
  createPost: (post: Post, history: History) => void
}

interface State {}

export default class CreatePostLayout extends Component<Props, State> {
  componentWillMount() {
    const { authenticate, history } = this.props
    authenticate(history)
  }

  render() {
    const { history, createPost, logout, user } = this.props
    const isAdmin = user ? user.isAdmin : false
    const post: Post = {
      _id: '',
      authorId: '',
      title: '',
      remuneration: '',
      location: '',
      workType: '',
      closingDate: new Date(),
      description: '',
      skills: [],
      howToApply: '',
    }

    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} isAdmin={isAdmin} />
        <Paper style={styles.form as any} zDepth={1}>
          <h1>Post an Internship</h1>
          <div style={styles.postForm}>
            <PostForm
              postDetails={post}
              isCreateNew={true}
              history={history}
              onSubmit={createPost}
            />
          </div>
        </Paper>
      </div>
    )
  }
}