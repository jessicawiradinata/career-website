import React, { Component } from 'react'
import { Paper } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { Post } from '../../domain/model/Post'
import { User } from '../../domain/model/User'
import PostForm from '../../components/PostForm/PostForm'
import { styles } from './styles'
import { strings } from './strings'

interface Props {
  postDetails: Post
  history: History
  match: any
  user: User
  authenticate: (history: History) => void
  authorize: (history: History, authorId: string, isAdmin: boolean) => void
  logout: (history: History) => void
  updatePost: (post: Post, history: History, postId: string) => void
}

interface State {}

export default class EditPostLayout extends Component<Props, State> {
  componentWillMount() {
    const { authenticate, authorize, history, postDetails, user } = this.props
    const isAdmin = user ? user.isAdmin : false
    authenticate(history)
    authorize(history, postDetails.authorId, isAdmin)
  }

  render() {
    const { history, updatePost, logout, user, postDetails } = this.props
    const isAdmin = user ? user.isAdmin : false

    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} isAdmin={isAdmin} />
        <Paper style={styles.form as any} zDepth={1}>
          <h1>{strings.editInternship}</h1>
          <div style={styles.postForm}>
            <PostForm
              postDetails={postDetails}
              isCreateNew={false}
              history={history}
              onSubmit={updatePost}
            />
          </div>
        </Paper>
      </div>
    )
  }
}