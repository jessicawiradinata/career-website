import React, { Component } from 'react'
import { map } from 'lodash'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { Post } from '../../domain/model/Post'
import { User } from '../../domain/model/User'
import PostCard from '../../components/PostCard/PostCard'
import { Paper, AutoComplete } from 'material-ui'
import { styles } from './styles'

interface Props {
  posts: Post[]
  history: History
  user: User
  logout: (history: History) => void
  deletePost: (postId: string) => void
}

interface State {
  searchText: string
}

export default class PostsLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      searchText: '',
    }
  }

  filterPosts = (posts: Post[], searchText: string) =>
    posts.filter((post: Post) => (post.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1))

  renderPostCards = () => {
    const { posts, user, history, deletePost } = this.props
    const { searchText } = this.state
    const isAdmin = user ? user.isAdmin : false
    const filteredPosts = this.filterPosts(posts, searchText)

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

  render() {
    const { history, logout, user, posts } = this.props
    const isLoggedIn = window.localStorage.token !== undefined
    const isAdmin = user ? user.isAdmin : false
    const postTitles = map(posts, (post: Post) => post.title)

    return (
      <div>
        <Header history={history} isLoggedIn={isLoggedIn} logout={logout} isAdmin={isAdmin} />
        <Paper style={{ paddingLeft: 20, paddingBottom: 10 }}>
          <AutoComplete
            hintText='Search'
            dataSource={postTitles}
            filter={AutoComplete.caseInsensitiveFilter}
            style={styles.searchField}
            textFieldStyle={styles.searchTextField}
            onUpdateInput={(searchText) => this.setState({ searchText })}
          />
        </Paper>
        {this.renderPostCards()}
      </div>
    )
  }
}