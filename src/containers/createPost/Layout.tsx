/**
 * Layout for 'Create Post' page
 */
import React, { Component } from 'react'
import { Paper, Divider } from 'material-ui'
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
  locations: string[]
  authenticate: (history: History) => void
  logout: (history: History) => void
  createPost: (post: Post, history: History) => void
  searchLocation: (searchText: string) => void
}

/**
 * All states owned by this layout and their types
 */
interface State {
  searchText: string
}

export default class CreatePostLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      searchText: '',
    }
  }

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
    const { history, createPost, logout, user, locations, searchLocation } = this.props
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
        <div style={styles.pageContainer}>
          <Paper style={styles.titleContainer as any} zDepth={0}>
            <h2>{strings.internshipTitle}</h2>
          </Paper>
          <Divider />
          <Paper style={styles.form as any} zDepth={0}>
            <div style={styles.postForm as any}>
              <PostForm
                postDetails={post}
                isCreateNew={true}
                history={history}
                onSubmit={createPost}
                locations={locations}
                searchLocation={searchLocation}
              />
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}