/**
 * A input form component to handle creating and editing of posts
 */
import React, { Component } from 'react'
import { TextField, RaisedButton, DatePicker, Chip, AutoComplete } from 'material-ui'
import { History } from 'history'
import { Post } from '../../domain/model/Post'
import { concat, map, uniqueId, pull, find } from 'lodash'
import { styles } from './styles'
import { postformStrings } from '../../constants/strings'
import { dimens } from './dimens'
import { isEmpty } from './validation'
import WorkTypeSelectField from '../WorkTypeSelectField/WorkTypeSelectField'
import ValidationTextField from '../ValidationTextField/ValidationTextField'
import validator from 'validator'

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
  validLocation: boolean
  locationFocused: boolean
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
      title: title ? title : '',
      remuneration,
      location,
      workType: workType ? workType : postformStrings.fullTime,
      closingDate: date,
      description,
      skills,
      howToApply,
      skill: '',
      validLocation: false,
      locationFocused: false,
    }
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
   * Validates whether a text is valid by checking whether it is not empty
   * @param text string to be validated
   * @return true if text is not empty, false if text is empty
   */
  validateEmpty = (text: string) => !validator.isEmpty(text)

  /**
   * Pushes a new skill to the skills array when it is entered
   */
  onEnterSkills = (event: any) => {
    if (event.key === postformStrings.enter) {
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
   * Disables submit button if there are error validation fields
   */
  disableSubmit = () => {
    const { title, location, howToApply } = this.state
    return !this.validateEmpty(title) || !this.validateEmpty(location) || !this.validateEmpty(howToApply)
  }

  /**
   * Renders Post Form Component layout
   */
  render() {
    const { isCreateNew, onSubmit, postDetails, history, locations } = this.props
    const { validLocation, locationFocused, title, remuneration, howToApply, location, workType, closingDate, description, skill } = this.state
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
        <ValidationTextField
          label={postformStrings.titleText}
          isFloatingLabelFixed={true}
          value={title}
          style={styles.textField}
          errorText={postformStrings.titleError}
          maxLength={dimens.titleLength}
          onChange={(event: any) => this.setState({ title: event.target.value })}
          validate={(text: string) => this.validateEmpty(title)}
        />
        <TextField
          floatingLabelText={postformStrings.remunerationText}
          floatingLabelFixed
          hintText={postformStrings.remunerationHint}
          maxLength={dimens.remunerationLength}
          style={styles.textField}
          value={remuneration}
          onChange={(remuneration: any) => this.setState({ remuneration: remuneration.target.value })}
        />
        <div style={styles.textField}>
          <AutoComplete
            floatingLabelText={postformStrings.locationText}
            floatingLabelFixed
            fullWidth
            searchText={location}
            maxLength={dimens.locationLength}
            dataSource={locations}
            filter={AutoComplete.caseInsensitiveFilter}
            onUpdateInput={this.onUpdateLocation}
            onBlur={this.locationOnBlur}
            errorText={validLocation || !locationFocused ? '' : postformStrings.locationHint}
          />
        </div>
        <div style={styles.textField}>
          <WorkTypeSelectField
            value={workType}
            onChange={(event, index, value) => this.setState({ workType: value })}
            style={styles.workTypeField}
          />
          <DatePicker
            floatingLabelText={postformStrings.closingDate}
            floatingLabelFixed
            mode={postformStrings.landScape as any}
            style={styles.datePicker}
            textFieldStyle={styles.datePickerField}
            defaultDate={closingDate}
            minDate={new Date()}
            onChange={(event, value) => this.setState({ closingDate: value })}
          />
        </div>
        <TextField
          floatingLabelText={postformStrings.descriptionText}
          floatingLabelFixed
          style={styles.textField}
          multiLine
          maxLength={dimens.descriptionLength}
          onChange={(description: any) => this.setState({ description: description.target.value })}
          value={description}
        />
        <TextField
          floatingLabelText={postformStrings.requiredSkillText}
          floatingLabelFixed
          style={styles.textField}
          hintText={postformStrings.requiredSkillHint}
          maxLength={dimens.skillLength}
          onChange={(skill: any) => this.setState({ skill: skill.target.value })}
          onKeyPress={this.onEnterSkills}
          value={skill}
        />
        <div style={styles.chipWrapper as any}>
          {this.renderSkillsChip(this.state.skills)}
        </div>
        <ValidationTextField
          label={postformStrings.howToApply}
          isFloatingLabelFixed={true}
          value={howToApply}
          style={styles.textField}
          errorText={postformStrings.howToApplyError}
          maxLength={dimens.toApplyLength}
          onChange={(event: any) => this.setState({ howToApply: event.target.value })}
          validate={(text: string) => this.validateEmpty(howToApply)}
        />
        <RaisedButton
          label={isCreateNew ? postformStrings.submit : postformStrings.update}
          primary={true}
          style={styles.submitBtn}
          disabled={this.disableSubmit()}
          onClick={() => isCreateNew ? onSubmit(post, history) : onSubmit(post, history, postDetails._id)}
        />
      </div>
    )
  }
}