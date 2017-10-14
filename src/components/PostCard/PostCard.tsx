/**
 * A Card Component to display each post
 */
import React, { Component } from 'react'
import { Card, CardTitle, CardActions, FlatButton, CardText, Chip, FontIcon } from 'material-ui'
import { Post } from '../../domain/model/Post'
import { map, uniqueId } from 'lodash'
import { History } from 'history'
import { styles } from './styles'
import { postcardStrings } from '../../constants/strings'
import dateformat from 'dateformat'

/**
 * Props that can be passed to this component and their types
 */
interface Props {
  post: Post
  authorName: string
  history: History
  showActions: boolean
  onDelete: (postId: string) => void
}

/**
 * States owned by this component and their types
 */
interface State {}

export default class PostCard extends Component<Props, State> {

  /**
   * Maps each skill in an array to return it as a Skill Chip
   * @param skills am array of skills to be mapped
   * @return a collection of skills chips
   */
  renderSkillsChip = (skills: string[]) => {
    return map(skills, (skill) => {
      return (
        <Chip key={uniqueId()} style={styles.chip}>
          {skill}
        </Chip>
      )
    })
  }

  /**
   * Renders Post Card layout
   */
  render() {
    const { post, history, onDelete, showActions, authorName } = this.props
    const closingDate = dateformat(post.closingDate, postcardStrings.dateFormat)
    const postDate = dateformat(post.createdAt, postcardStrings.dateFormat)

    return (
      <Card style={styles.postCard} key={post._id}>
        <CardTitle actAsExpander showExpandableButton>
          <div style={styles.titleContainer as any}>
            <h2>{post.title}</h2>
            <div style={styles.rightColumn as any}>
              <FontIcon style={styles.chip} className={postcardStrings.classMaterialIcons}>{postcardStrings.locationOn}</FontIcon>
              <text>{post.location}</text>
            </div>
          </div>
          <div style={styles.titleContainer as any}>
            <text>{`${postcardStrings.postedBy} ${authorName}`}</text>
            <text style={styles.rightColumn as any}>{post.remuneration}</text>
          </div>
        </CardTitle>
        <CardText expandable>
          <div style={styles.titleContainer as any}>
            <div style={styles.contentContainer as any}>
              <h4>{postcardStrings.workType}</h4>
              <text style={styles.chip}>{`${post.workType}`}</text>
            </div>
            <text style={styles.rightColumn as any}>{`${postcardStrings.postedOn} ${postDate}`}</text>
          </div>
          <div style={styles.contentContainer as any}>
            <h4>{postcardStrings.description}</h4>
            <text>{post.description}</text>
          </div>
          <div style={styles.contentContainer as any}>
            <h4>{postcardStrings.howToApply}</h4>
            <text>{post.howToApply}</text>
          </div>
        </CardText>
        <div style={styles.footerContainer as any}>
          <div style={styles.chipContainer as any}>
            {this.renderSkillsChip(post.skills)}
          </div>
          <text>{`${postcardStrings.closingOn} ${closingDate}`}</text>
        </div>
        { showActions ?
          <CardActions style={styles.actionsContainer as any}>
            <FlatButton label={postcardStrings.editLabel} primary onClick={() => history.push(`/editpost/${post._id}`)} />
            <FlatButton label={postcardStrings.deleteLabel} secondary onClick={() => onDelete(post._id)} />
          </CardActions> :
          <div style={styles.bottomPad} />
        }
      </Card>
    )
  }
}