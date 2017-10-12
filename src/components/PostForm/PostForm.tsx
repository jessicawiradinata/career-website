import React, { Component } from 'react'
import { TextField, RaisedButton, SelectField, MenuItem, DatePicker, Chip } from 'material-ui'
import { History } from 'history'
import { Post } from '../../domain/model/Post'
import { concat, map, uniqueId, pull, find } from 'lodash'
import { styles } from './styles'
import { isEmpty } from './validation'

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
  howToApply: string
  skill: string
  validTitle: boolean
  titleFocused: boolean
  validLocation: boolean
  locationFocused: boolean
  validHowToApply: boolean
  howToApplyFocused: boolean
}

export default class PostForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const { title, remuneration, location, workType, closingDate, description, skills, howToApply } = this.props.postDetails
    const date = new Date(closingDate)
    this.state = {
      title,
      remuneration,
      location,
      workType: workType ? workType : 'Full Time',
      closingDate: date,
      description,
      skills,
      howToApply,
      skill: '',
      validTitle: false,
      titleFocused: false,
      validLocation: false,
      locationFocused: false,
      validHowToApply: false,
      howToApplyFocused: false,
    }
  }

  titleOnChange = (title: any) => {
    this.setState({
      title: title.target.value,
      validTitle: !isEmpty(title.target.value),
    })
  }

  titleOnBlur = () => {
    this.setState({
      titleFocused: true,
      validTitle: !isEmpty(this.state.title),
    })
  }

  locationOnChange = (location: any) => {
    this.setState({
      location: location.target.value,
      validLocation: !isEmpty(location.target.value),
    })
  }

  locationOnBlur = () => {
    this.setState({
      locationFocused: true,
      validLocation: !isEmpty(this.state.location),
    })
  }

  howToApplyOnChange = (howToApply: any) => {
    this.setState({
      howToApply: howToApply.target.value,
      validHowToApply: !isEmpty(howToApply.target.value),
    })
  }

  howToApplyOnBlur = (howToApply: any) => {
    this.setState({
      howToApplyFocused: true,
      validHowToApply: !isEmpty(this.state.howToApply),
    })
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
    const { validTitle, titleFocused, validLocation, locationFocused, validHowToApply, howToApplyFocused } = this.state
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
          floatingLabelText='Title*'
          floatingLabelFixed
          style={styles.textField}
          value={this.state.title}
          maxLength='70'
          onChange={this.titleOnChange}
          onBlur={this.titleOnBlur}
          errorText={validTitle || !titleFocused ? '' : 'Title field cannot be empty'}
        />
        <div style={styles.textField}>
          <TextField
            floatingLabelText='Remuneration'
            floatingLabelFixed
            hintText='e.g. $20 - $25 per hour'
            maxLength='50'
            style={styles.remunerationField}
            value={this.state.remuneration}
            onChange={(remuneration: any) => this.setState({ remuneration: remuneration.target.value })}
          />
          <TextField
            floatingLabelText='Location*'
            floatingLabelFixed
            hintText='e.g. Sydney, NSW'
            style={styles.locationField}
            value={this.state.location}
            maxLength='50'
            onChange={this.locationOnChange}
            onBlur={this.locationOnBlur}
            errorText={validLocation || !locationFocused ? '' : 'Location field cannot be empty'}
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
            minDate={new Date()}
            onChange={(event, value) => this.setState({ closingDate: value })}
          />
        </div>
        <TextField
          floatingLabelText='Description'
          floatingLabelFixed
          style={styles.textField}
          multiLine
          maxLength='2000'
          onChange={(description) => this.setState({ description: (description.target as HTMLTextAreaElement).value })}
          value={this.state.description}
        />
        <TextField
          floatingLabelText='Required Skills'
          floatingLabelFixed
          style={styles.textField}
          hintText='Enter skill name and press Enter'
          maxLength='70'
          onChange={(skill) => this.setState({ skill: (skill.target as HTMLTextAreaElement).value })}
          onKeyPress={this.onEnterSkills}
          value={this.state.skill}
        />
        <div style={styles.chipWrapper as any}>
          {this.renderSkillsChip(this.state.skills)}
        </div>
        <TextField
          floatingLabelText='How to Apply*'
          floatingLabelFixed
          style={styles.textField}
          multiLine
          maxLength='1000'
          value={this.state.howToApply}
          onChange={this.howToApplyOnChange}
          onBlur={this.howToApplyOnBlur}
          errorText={validHowToApply || !howToApplyFocused ? '' : 'How to Apply field cannot be empty'}
        />
        <RaisedButton
          label={isCreateNew ? 'Submit' : 'Update'}
          primary={true}
          style={styles.submitBtn}
          disabled={!validTitle || !validLocation || !validHowToApply}
          onClick={() => isCreateNew ? onSubmit(post, history) : onSubmit(post, history, postDetails._id)}
        />
      </div>
    )
  }
}