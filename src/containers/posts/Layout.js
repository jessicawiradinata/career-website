import React, { Component } from 'react'
import { Card, CardTitle, CardText, FontIcon, Chip } from 'material-ui'
import { map } from 'lodash'
import Header from '../../components/Header'
import moment from 'moment'

export default class PostsLayout extends Component {
  renderSkillsData = (skills) => {
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
    return map(posts, (post) => {
      const closingDate = moment(post.closingDate).format("DD MMM YYYY")
      const postDate = moment(post.createdAt).format("DD MMM YYYY")
      return (
        <Card style={styles.postCard} key={post._id}>
          <CardTitle actAsExpander showExpandableButton>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <h2>{post.title}</h2>
              <div style={{ marginRight: 50 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <FontIcon style={{ marginRight: 5 }} className="material-icons">location_on</FontIcon>
                  <text>{post.location}</text>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <text>{`Posted by ${post.authorName}`}</text>
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginBottom: 15 }}>
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

  componentWillMount() {
    const { getPosts, getUsers } = this.props
    getPosts()
    getUsers()
  }

  render() {
    const { history, logout } = this.props
    const isLoggedIn = localStorage.token != null

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
  }
}