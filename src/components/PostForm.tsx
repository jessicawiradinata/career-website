import React, { Component } from 'react'
import { TextField, RaisedButton, SelectField, MenuItem, DatePicker, Chip } from 'material-ui'
import moment from 'moment'
import { History } from 'history'
import { Post } from '../domain/model/Post'
import { concat, map, uniqueId, pull, find } from 'lodash'

interface Props {
  postDetails: Post,
  isCreateNew: boolean,
  history: History,
  onSubmit: (post: Post, history: History, postId?: string) => void
}

interface State {
  title: string
  remuneration: string
  location: string
  workType: string
  closingDate: any
  description: string
  skills: string[]
  howToApply: string,
  skill: string,
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
      skill: '',
    }
  }

  onEnterSkills = (event: any) => {
    if (event.key === 'Enter') {
      const { skills, skill } = this.state
      const isExist = find(skills, (skillItem) => skillItem === skill)
      if (!isExist) {
        this.setState({ skills: concat(skills, skill)})
      }
      this.setState({ skill: '' })
    }
  }

  onDeleteChip = (skill: string) => {
    this.setState({ skills: pull(this.state.skills, skill) })
  }

  renderSkillsChip = (skills: string[]) => {
    return map(skills, (skill) => {
      return (
        <Chip
          key={uniqueId()}
          style={styles.chip}
          onRequestDelete={() => this.onDeleteChip(skill)}
        >
          {skill}
        </Chip>
      )
    })
  }

  render() {
    const { isCreateNew, onSubmit, postDetails, history } = this.props
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
      <div style={styles.form as any}>
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
            style={styles.remunerationField}
            onChange={(remuneration) => this.setState({ remuneration: (remuneration.target as HTMLTextAreaElement).value })}
            value={this.state.remuneration}
          />
          <TextField
            floatingLabelText='Location'
            floatingLabelFixed
            hintText='e.g. Sydney, NSW'
            style={styles.locationField}
            onChange={(location) => this.setState({ location: (location.target as HTMLTextAreaElement).value })}
            value={this.state.location}
          />
        </div>
        <div style={styles.textField}>
          <SelectField
            floatingLabelText='Work Type'
            floatingLabelFixed
            value={this.state.workType}
            style={styles.workTypeField}
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
            style={styles.datePicker}
            textFieldStyle={styles.datePickerField}
            defaultDate={this.state.closingDate}
            minDate={moment().toDate()}
            onChange={(event, value) => this.setState({ closingDate: value })}
          />
        </div>
        <TextField
          floatingLabelText='Description'
          floatingLabelFixed
          style={styles.textField}
          multiLine
          onChange={(description) => this.setState({ description: (description.target as HTMLTextAreaElement).value })}
          value={this.state.description}
        />
        <TextField
          floatingLabelText='Required Skills'
          floatingLabelFixed
          style={styles.textField}
          hintText='Enter skill name and press Enter'
          onChange={(skill) => this.setState({ skill: (skill.target as HTMLTextAreaElement).value })}
          onKeyPress={this.onEnterSkills}
          value={this.state.skill}
        />
        <div style={styles.chipWrapper as any}>
          {this.renderSkillsChip(this.state.skills)}
        </div>
        <TextField
          floatingLabelText='How to Apply'
          floatingLabelFixed
          style={styles.textField}
          multiLine
          onChange={(howToApply) => this.setState({ howToApply: (howToApply.target as HTMLTextAreaElement).value })}
          value={this.state.howToApply}
        />
        <RaisedButton
          label={isCreateNew ? 'Submit' : 'Update'}
          primary={true}
          style={styles.submitBtn}
          onClick={() => isCreateNew ? onSubmit(post, history) : onSubmit(post, history, postDetails._id)}
        />
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
    width: '100%',
  },
  submitBtn: {
    marginTop: 40,
  },
  remunerationField: {
    float: 'left',
    width: '45%',
  },
  datePicker: {
    marginLeft: '55%',
  },
  datePickerField: {
    width: '100%',
  },
  workTypeField: {
    float: 'left',
    width: '45%',
  },
  locationField: {
    width: '45%',
    marginLeft: '10%',
  },
  chipWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'flex-start',
  },
  chip: {
    margin: 5,
  },
}