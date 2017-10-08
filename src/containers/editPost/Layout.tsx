import React, { Component } from 'react'
import { Paper } from 'material-ui'
import Header from '../../components/Header'
import { History } from 'history'
import { Post } from '../../domain/model/Post'
import { User } from '../../domain/model/User'
import PostForm from '../../components/PostForm'

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
          <h1>Edit Job Post</h1>
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

const styles = {
  form: {
    margin: 20,
    padding: 40,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  postForm: {
    width: '70%',
  },
}