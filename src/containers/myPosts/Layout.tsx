import React, { Component } from 'react'
import { Card, CardTitle, CardActions, FlatButton, CardText, Chip, FontIcon } from 'material-ui'
import Header from '../../components/Header'
import { map } from 'lodash'
import moment from 'moment'
import { History } from 'history'

interface Props {
  history: History
  logout: (history: History) => any
  deletePost: (postId: string) => any
  getUserPosts: (userId: string) => any
  userPosts: any
  deletePostStatus: any
  user: any
}

interface State {}

export default class MyPostsLayout extends Component<Props, State> {
  renderSkillsData = (skills: string[]) => {
    return map(skills, (skill) => {
      return (
        <Chip
          key={skill}
          style={{ marginRight: 5 }}
          onClick={() => null}>
          {skill}
        </Chip>
      )
    })
  }

  renderData = () => {
    const { userPosts, deletePost, history, user } = this.props
    return map(userPosts, (post: any) => {
      const closingDate = moment(post.closingDate).format('DD MMM YYYY')
      const postDate = moment(post.createdAt).format('DD MMM YYYY')
      return (
        <Card style={styles.postCard} key={post._id}>
          <CardTitle actAsExpander showExpandableButton>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <h2>{post.title}</h2>
              <div style={{ marginRight: 50 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <FontIcon style={{ marginRight: 5 }} className='material-icons'>location_on</FontIcon>
                  <text>{post.location}</text>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <text>{`Posted by ${user.name}`}</text>
              <div style={{ marginRight: 50 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <text>{post.remuneration}</text>
                </div>
              </div>
            </div>
          </CardTitle>
          <CardText expandable>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
              <text style={{ marginBottom: 5 }}>{`${post.workType} work`}</text>
              <text style={{ marginRight: 50 }}>{`Posted on ${postDate}`}</text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginBottom: 20 }}>
              <h4>Description</h4>
              <text>{post.description}</text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginBottom: 10 }}>
              <h4>How to Apply</h4>
              <text>{post.howToApply}</text>
            </div>
          </CardText>
          <CardText expandable>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 5 }}>
                {this.renderSkillsData(post.skills)}
              </div>
              <text style={{ marginRight: 50 }}>{`Closing on ${closingDate}`}</text>
            </div>
          </CardText>
          <CardActions style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 30}}>
            <FlatButton label='Edit' primary onClick={() => history.push(`/editpost/${post._id}`)} />
            <FlatButton label='Delete' secondary onClick={() => deletePost(post._id)} />
          </CardActions>
        </Card>
      )
    })
  }

  componentWillMount() {
    const { getUserPosts } = this.props
    getUserPosts(window.localStorage.id)
  }

  render() {
    const { history, logout } = this.props
    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} />
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
}