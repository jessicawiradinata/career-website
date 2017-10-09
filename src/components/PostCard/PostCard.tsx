import React, { Component } from 'react'
import { Card, CardTitle, CardActions, FlatButton, CardText, Chip, FontIcon } from 'material-ui'
import { Post } from '../../domain/model/Post'
import { map, uniqueId } from 'lodash'
import moment from 'moment'
import { History } from 'history'
import { styles } from './styles'

interface Props {
  post: Post
  authorName: string
  history: History
  showActions: boolean
  onDelete: (postId: string) => void
}

interface State {}

export default class PostCard extends Component<Props, State> {
  renderSkillsChip = (skills: string[]) => {
    return map(skills, (skill) => {
      return (
        <Chip key={uniqueId()} style={styles.chip}>
          {skill}
        </Chip>
      )
    })
  }

  render() {
    const { post, history, onDelete, showActions, authorName } = this.props
    const closingDate = moment(post.closingDate).format('DD MMM YYYY')
    const postDate = moment(post.createdAt).format('DD MMM YYYY')

    return (
      <Card style={styles.postCard} key={post._id}>
        <CardTitle actAsExpander showExpandableButton>
          <div style={styles.titleContainer as any}>
            <h2>{post.title}</h2>
            <div style={styles.rightColumn as any}>
              <FontIcon style={styles.chip} className='material-icons'>location_on</FontIcon>
              <text>{post.location}</text>
            </div>
          </div>
          <div style={styles.titleContainer as any}>
            <text>{`Posted by ${authorName}`}</text>
            <text style={styles.rightColumn as any}>{post.remuneration}</text>
          </div>
        </CardTitle>
        <CardText expandable>
          <div style={styles.titleContainer as any}>
            <div style={styles.contentContainer as any}>
              <h4>Work Type</h4>
              <text style={styles.chip}>{`${post.workType}`}</text>
            </div>
            <text style={styles.rightColumn as any}>{`Posted on ${postDate}`}</text>
          </div>
          <div style={styles.contentContainer as any}>
            <h4>Description</h4>
            <text>{post.description}</text>
          </div>
          <div style={styles.contentContainer as any}>
            <h4>How to Apply</h4>
            <text>{post.howToApply}</text>
          </div>
        </CardText>
        <div style={styles.footerContainer as any}>
          <div style={styles.chipContainer as any}>
            {this.renderSkillsChip(post.skills)}
          </div>
          <text>{`Closing on ${closingDate}`}</text>
        </div>
        { showActions ?
          <CardActions style={styles.actionsContainer as any}>
            <FlatButton label='Edit' primary onClick={() => history.push(`/editpost/${post._id}`)} />
            <FlatButton label='Delete' secondary onClick={() => onDelete(post._id)} />
          </CardActions> :
          <div style={styles.bottomPad} />
        }
      </Card>
    )
  }
}