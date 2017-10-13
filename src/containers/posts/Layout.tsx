/**
 * Layout for posts page
 */
import React, { Component } from 'react'
import { map } from 'lodash'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { Post } from '../../domain/model/Post'
import { User } from '../../domain/model/User'
import PostCard from '../../components/PostCard/PostCard'
import { Paper, TextField } from 'material-ui'
import { styles } from './styles'
import { strings } from './strings'

/**
 * Props that can be passed to this layout and their types
 */
interface Props {
  posts: Post[]
  history: History
  user: User
  logout: (history: History) => void
  deletePost: (postId: string) => void
}

/**
 * All states owned by this layout and their types
 */
interface State {
  searchText: string
}

export default class PostsLayout extends Component<Props, State> {

  /**
   * Initializes posts page states when it is first created
   * @param props props passed to posts page
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      searchText: '',
    }
  }

  /**
   * Filters posts collection based on the post titles
   * @param posts collection of posts to be filtered
   * @param searchText text to be compared with existing post titles
   */
  filterPosts = (posts: Post[], searchText: string) =>
    posts.filter((post: Post) => (post.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1))

  /**
   * Maps filtered posts to Post Card components, shows a message if no posts are found
   */
  renderPostCards = () => {
    const { posts, user, history, deletePost } = this.props
    const { searchText } = this.state
    const isAdmin = user ? user.isAdmin : false
    const filteredPosts = this.filterPosts(posts, searchText)

    if (filteredPosts.length === 0)
      return <h4 style={styles.notFoundContainer}>No posts found</h4>

    return map(filteredPosts, (post: any) => {
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

  /**
   * Renders posts page layout
   */
  render() {
    const { history, logout, user } = this.props
    const isLoggedIn = window.localStorage.token !== undefined
    const isAdmin = user ? user.isAdmin : false

    return (
      <div>
        <Header history={history} isLoggedIn={isLoggedIn} logout={logout} isAdmin={isAdmin} />
        <Paper style={styles.searchContainer}>
          <TextField
            hintText={strings.searchText}
            style={styles.searchField}
            onChange={(searchText: any) => this.setState({ searchText: searchText.target.value })}
          />
        </Paper>
        {this.renderPostCards()}
      </div>
    )
  }
}