import React, { Component } from 'react'
import { Paper, TextField, RaisedButton, SelectField, MenuItem, DatePicker } from 'material-ui'
import Header from '../../components/Header'
import moment from 'moment'
import { History } from 'history'
import { Post } from '../../domain/model/Post'
import { User } from '../../domain/model/User'

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

interface State {
  title: string
  remuneration: string
  location: string
  workType: string
  closingDate: any
  description: string
  skills: string[]
  howToApply: string
}

export default class EditPostLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const { title, remuneration, location, workType, closingDate, description, skills, howToApply } = this.props.postDetails
    const date = moment(closingDate).toDate()
    this.state = {
      title,
      remuneration,
      location,
      workType,
      closingDate: date,
      description,
      skills,
      howToApply,
    }
  }

  componentWillMount() {
    const { authenticate, authorize, history, postDetails, user } = this.props
    const isAdmin = user ? user.isAdmin : false
    authenticate(history)
    authorize(history, postDetails.authorId, isAdmin)
  }

  render() {
    const { history, updatePost, logout, user } = this.props
    const isAdmin = user ? user.isAdmin : false
    const post: Post = {
      _id: '',
      title: this.state.title,
      remuneration: this.state.remuneration,
      location: this.state.location,
      workType: this.state.workType,
      closingDate: this.state.closingDate,
      description: this.state.description,
      skills: this.state.skills,
      howToApply: this.state.howToApply,
      authorId: window.localStorage.id,
    }

    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} isAdmin={isAdmin} />
        <Paper style={styles.form as any} zDepth={1}>
          <h1>Edit Job Post</h1>
          <TextField
            floatingLabelText='Title'
            floatingLabelFixed
            style={styles.textField}
            onChange={(title) => this.setState({ title: (title.target as HTMLTextAreaElement).value })}
            value={this.state.title}
          />
          <div style={styles.textField}>
            <TextField
              floatingLabelText='Remuneration'
              floatingLabelFixed
              hintText='e.g. $20 - $25 per hour'
              style={{ float: 'left', width: '45%' }}
              onChange={(remuneration) => this.setState({ remuneration: (remuneration.target as HTMLTextAreaElement).value })}
              value={this.state.remuneration}
            />
            <TextField
              floatingLabelText='Location'
              floatingLabelFixed
              hintText='e.g. Sydney, NSW'
              style={{ width: '45%', marginLeft: '10%' }}
              onChange={(location) => this.setState({ location: (location.target as HTMLTextAreaElement).value })}
              value={this.state.location}
            />
          </div>
          <div style={styles.textField}>
            <SelectField
              floatingLabelText='Work Type'
              floatingLabelFixed
              value={this.state.workType}
              style={{ float: 'left', width: '45%' }}
              onChange={(event, index, value) => this.setState({ workType: value })}
            >
              <MenuItem value='Full Time' primaryText='Full Time' />
              <MenuItem value='Part Time' primaryText='Part Time' />
              <MenuItem value='Temporary' primaryText='Temporary' />
              <MenuItem value='Casual' primaryText='Casual' />
            </SelectField>
            <DatePicker
              floatingLabelText='Closing Date'
              floatingLabelFixed
              mode='landscape'
              style={{ marginLeft: '55%' }}
              textFieldStyle={{ width: '100%' }}
              defaultDate={this.state.closingDate}
              minDate={moment().toDate()}
              onChange={(event, value) => this.setState({ closingDate: value })}
            />
          </div>
          <TextField
            floatingLabelText='Description'
            floatingLabelFixed
            hintText='Job description, requirements, etc.'
            style={styles.textField}
            multiLine
            onChange={(description) => this.setState({ description: (description.target as HTMLTextAreaElement).value })}
            value={this.state.description}
          />
          <TextField
            floatingLabelText='How to Apply'
            floatingLabelFixed
            style={styles.textField}
            multiLine
            onChange={(howToApply) => this.setState({ howToApply: (howToApply.target as HTMLTextAreaElement).value })}
            value={this.state.howToApply}
          />
          <RaisedButton
            label='Update'
            primary={true}
            style={styles.submitBtn}
            onClick={() => updatePost(post, history, this.props.match.params.postId)}
          />
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
  textField: {
      width: '55%',
  },
  submitBtn: {
      marginTop: 40,
  },
}