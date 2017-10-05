import React, { Component } from 'react'
import { Card, CardTitle, CardActions, FlatButton, CardText, Chip, FontIcon } from 'material-ui'
import Header from '../../components/Header'
import { map } from 'lodash'
import moment from 'moment'
import { History } from 'history'
import { User } from '../../domain/model/User'
import { Post } from '../../domain/model/Post'

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

  renderSkillsData = (skills: string[]) => {
    return map(skills, (skill) => {
      return (
        <Chip
          key={skill}
          style={styles.marginRight5}
          onClick={() => null}>
          {skill}
        </Chip>
      )
    })
  }

  renderData = () => {
    const { userPosts, deletePost, history, user } = this.props
    return map(userPosts, (post: Post) => {
      const closingDate = moment(post.closingDate).format('DD MMM YYYY')
      const postDate = moment(post.createdAt).format('DD MMM YYYY')
      return (
        <Card style={styles.postCard} key={post._id}>
          <CardTitle actAsExpander showExpandableButton>
            <div style={styles.titleContainer as any}>
              <h2>{post.title}</h2>
              <div style={styles.marginRight50}>
                <div style={styles.endContainer as any}>
                  <FontIcon style={styles.marginRight5} className='material-icons'>location_on</FontIcon>
                  <text>{post.location}</text>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <text>{`Posted by ${user.name}`}</text>
              <div style={styles.marginRight50}>
                <div style={styles.endContainer as any}>
                  <text>{post.remuneration}</text>
                </div>
              </div>
            </div>
          </CardTitle>
          <CardText expandable>
            <div style={styles.worktypeContainer as any}>
              <text style={styles.marginRight5}>{`${post.workType} work`}</text>
              <text style={styles.marginRight50}>{`Posted on ${postDate}`}</text>
            </div>
            <div style={styles.descriptionContainer as any}>
              <h4>Description</h4>
              <text>{post.description}</text>
            </div>
            <div style={styles.howContainer as any}>
              <h4>How to Apply</h4>
              <text>{post.howToApply}</text>
            </div>
          </CardText>
          <CardText expandable>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 5 }}>
                {this.renderSkillsData(post.skills)}
              </div>
              <text style={styles.marginRight50}>{`Closing on ${closingDate}`}</text>
            </div>
          </CardText>
          <CardActions style={styles.cardContainer as any}>
            <FlatButton label='Edit' primary onClick={() => history.push(`/editpost/${post._id}`)} />
            <FlatButton label='Delete' secondary onClick={() => deletePost(post._id)} />
          </CardActions>
        </Card>
      )
    })
  }

  render() {
    const { history, logout, user } = this.props
    const isAdmin = user ? user.isAdmin : false

    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} isAdmin={isAdmin} />
        {this.renderData()}
      </div>
    )
  }
}

const styles = {
  postCard: {
    marginTop: 20,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 30,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  marginRight50: {
    marginRight: 50,
  },
  endContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  marginRight5: {
    marginRight: 5,
  },
  worktypeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  howContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
}