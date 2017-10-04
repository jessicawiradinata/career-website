import React, { Component } from 'react'
import { Card, CardTitle, CardText, FontIcon, Chip } from 'material-ui'
import { map } from 'lodash'
import Header from '../../components/Header'
import moment from 'moment'
import { History } from 'history'

interface Props {
  posts: any
  history: History
  logout: (history: History) => void
}

interface State {}

export default class PostsLayout extends Component<Props, State> {
  renderSkillsData = (skills: string[]) => {
    return map(skills, (skill) => {
      return (
        <Chip
          key={skill}
          style={{ margin: 5 }}
          onClick={() => null}>
          {skill}
        </Chip>
      )
    })
  }

  renderData = () => {
    const { posts } = this.props
    return map(posts, (post: any) => {
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
            <div style={styles.authorContainer as any}>
              <text>{`Posted by ${post.authorName}`}</text>
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
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: 8, marginTop: 5 }}>
              {this.renderSkillsData(post.skills)}
            </div>
            <text style={{ marginRight: 50 }}>{`Closing on ${closingDate}`}</text>
          </div>
        </Card>
      )
    })
  }

  render() {
    const { history, logout } = this.props
    const isLoggedIn = localStorage.token !== null

    return (
      <div>
        <Header history={history} isLoggedIn={isLoggedIn} logout={logout} />
        {this.renderData()}
      </div>
    )
  }
}

const styles = {
  postCard: {
    marginTop: 20,
    paddingLeft: 10,
    paddingBottom: 20,
  },

  endContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  marginRight5: {
    marginRight: 5,
  },

  marginRight50: {
    marginRight: 50,
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

  titleContainer: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  authorContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}