/**
 * A input form component to handle creating and editing of posts
 */
import React, { Component } from 'react'
import { TextField, RaisedButton, SelectField, MenuItem, DatePicker, Chip, AutoComplete } from 'material-ui'
import { History } from 'history'
import { Post } from '../../domain/model/Post'
import { concat, map, uniqueId, pull, find } from 'lodash'
import { styles } from './styles'
import { strings } from './strings'
import { dimens } from './dimens'
import { isEmpty } from './validation'

/**
 * Props that can be passed to this component and their types
 */
interface Props {
  postDetails: Post
  isCreateNew: boolean
  history: History
  locations: string[]
  onSubmit: (post: Post, history: History, postId?: string) => void
  searchLocation: (searchText: string) => void
}

/**
 * States owned by this component and their types
 */
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

  /**
   * Initializes component attributes when it is first created
   * @param props props passed to this component
   */
  constructor(props: Props) {
    super(props)
    const { title, remuneration, location, workType, closingDate, description, skills, howToApply } = this.props.postDetails
    const date = new Date(closingDate)
    this.state = {
      title,
      remuneration,
      location,
      workType: workType ? workType : strings.fullTime,
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

  /**
   * Validates title field on change
   */
  titleOnChange = (title: any) => {
    this.setState({
      title: title.target.value,
      validTitle: !isEmpty(title.target.value),
    })
  }

  /**
   * Validates title field on blur (out of focus)
   */
  titleOnBlur = () => {
    this.setState({
      titleFocused: true,
      validTitle: !isEmpty(this.state.title),
    })
  }

  /**
   * Validates location field on change
   */
  locationOnChange = (location: any) => {
    this.setState({
      location: location.target.value,
      validLocation: !isEmpty(location.target.value),
    })
  }

  /**
   * Search for location suggestions and validates location field on text change
   * @param location input for location field
   */
  onUpdateLocation = (location: string) => {
    const { searchLocation } = this.props
    this.setState({
      location,
      validLocation: !isEmpty(location),
    })
    searchLocation(this.state.location)
  }

  /**
   * Validates location field on blur (out of focus)
   */
  locationOnBlur = () => {
    this.setState({
      locationFocused: true,
      validLocation: !isEmpty(this.state.location),
    })
  }

  /**
   * Validates how to apply field on change
   */
  howToApplyOnChange = (howToApply: any) => {
    this.setState({
      howToApply: howToApply.target.value,
      validHowToApply: !isEmpty(howToApply.target.value),
    })
  }

  /**
   * Validates how to apply field on blur (out of focus)
   */
  howToApplyOnBlur = (howToApply: any) => {
    this.setState({
      howToApplyFocused: true,
      validHowToApply: !isEmpty(this.state.howToApply),
    })
  }

  /**
   * Pushes a new skill to the skills array when it is entered
   */
  onEnterSkills = (event: any) => {
    if (event.key === strings.enter) {
      const { skills, skill } = this.state
      const isExist = find(skills, (skillItem) => skillItem === skill)
      if (!isExist) {
        this.setState({ skills: concat(skills, skill)})
      }
      this.setState({ skill: '' })
    }
  }

  /**
   * Removes skill from the skills array when delete button is clicked
   * @param skill the skill to be deleted
   */
  onDeleteChip = (skill: string) => {
    this.setState({ skills: pull(this.state.skills, skill) })
  }

  /**
   * Converts a skill array to skills chips
   * @param skills array of skills to be converted
   * @returns a collection of skills chips
   */
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

  /**
   * Renders Post Form Component layout
   */
  render() {
    const { isCreateNew, onSubmit, postDetails, history, locations } = this.props
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
          floatingLabelText={strings.titleText}
          floatingLabelFixed
          style={styles.textField}
          value={this.state.title}
          maxLength={dimens.titleLength}
          onChange={this.titleOnChange}
          onBlur={this.titleOnBlur}
          errorText={validTitle || !titleFocused ? '' : strings.titleHint}
        />
        <TextField
          floatingLabelText={strings.remunerationText}
          floatingLabelFixed
          hintText={strings.remunerationHint}
          maxLength={dimens.remunerationLength}
          style={styles.textField}
          value={this.state.remuneration}
          onChange={(remuneration: any) => this.setState({ remuneration: remuneration.target.value })}
        />
        <div style={styles.textField}>
          <AutoComplete
            floatingLabelText={strings.locationText}
            floatingLabelFixed
            fullWidth
            searchText={this.state.location}
            maxLength={dimens.locationLength}
            dataSource={locations}
            filter={AutoComplete.caseInsensitiveFilter}
            onUpdateInput={this.onUpdateLocation}
            onBlur={this.locationOnBlur}
            errorText={validLocation || !locationFocused ? '' : strings.locationHint}
          />
        </div>
        <div style={styles.textField}>
          <SelectField
            floatingLabelText={strings.workType}
            floatingLabelFixed
            value={this.state.workType}
            style={styles.workTypeField}
            onChange={(event, index, value) => this.setState({ workType: value })}
          >
            <MenuItem value={strings.fullTime} primaryText={strings.fullTime} />
            <MenuItem value={strings.partTime} primaryText={strings.partTime} />
            <MenuItem value={strings.temporary} primaryText={strings.temporary} />
            <MenuItem value={strings.casual} primaryText={strings.casual} />
          </SelectField>
          <DatePicker
            floatingLabelText={strings.closingDate}
            floatingLabelFixed
            mode={strings.landScape as any}
            style={styles.datePicker}
            textFieldStyle={styles.datePickerField}
            defaultDate={this.state.closingDate}
            minDate={new Date()}
            onChange={(event, value) => this.setState({ closingDate: value })}
          />
        </div>
        <TextField
          floatingLabelText={strings.descriptionText}
          floatingLabelFixed
          style={styles.textField}
          multiLine
          maxLength={dimens.descriptionLength}
          onChange={(description) => this.setState({ description: (description.target as HTMLTextAreaElement).value })}
          value={this.state.description}
        />
        <TextField
          floatingLabelText={strings.requiredSkillText}
          floatingLabelFixed
          style={styles.textField}
          hintText={strings.requiredSkillHint}
          maxLength={dimens.skillLength}
          onChange={(skill) => this.setState({ skill: (skill.target as HTMLTextAreaElement).value })}
          onKeyPress={this.onEnterSkills}
          value={this.state.skill}
        />
        <div style={styles.chipWrapper as any}>
          {this.renderSkillsChip(this.state.skills)}
        </div>
        <TextField
          floatingLabelText={strings.howToApply}
          floatingLabelFixed
          style={styles.textField}
          multiLine
          maxLength={dimens.toApplyLength}
          value={this.state.howToApply}
          onChange={this.howToApplyOnChange}
          onBlur={this.howToApplyOnBlur}
          errorText={validHowToApply || !howToApplyFocused ? '' : strings.howToApplyHint}
        />
        <RaisedButton
          label={isCreateNew ? strings.submit : strings.update}
          primary={true}
          style={styles.submitBtn}
          disabled={!validTitle || !validLocation || !validHowToApply}
          onClick={() => isCreateNew ? onSubmit(post, history) : onSubmit(post, history, postDetails._id)}
        />
      </div>
    )
  }
}