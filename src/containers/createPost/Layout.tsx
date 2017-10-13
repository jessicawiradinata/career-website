/**
 * Layout for 'Create Post' page
 */
import React, { Component } from 'react'
import { Paper } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { Post } from '../../domain/model/Post'
import { User } from '../../domain/model/User'
import PostForm from '../../components/PostForm/PostForm'
import { styles } from './styles'
import { strings } from './strings'

/**
 * Props that can be passed to this layout and their types
 */
interface Props {
  history: History
  createPostStatus: boolean
  user: User
  authenticate: (history: History) => void
  logout: (history: History) => void
  createPost: (post: Post, history: History) => void
}

/**
 * All states owned by this layout and their types
 */
interface State {}

export default class CreatePostLayout extends Component<Props, State> {

  /**
   * Authenticates user when entering the Create Post page
   * If user is not logged in, will be redirected to home page
   */
  componentWillMount() {
    const { authenticate, history } = this.props
    authenticate(history)
  }

  /**
   * Renders the Create Post page layout
   */
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
          <h1>{strings.internshipTitle}</h1>
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