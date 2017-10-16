/**
 * A Text Field component which validates its input based on the given validation method
 */
import React, { Component } from 'react'
import { TextField } from 'material-ui'

/**
 * Props that can be passed to this component and their types
 */
interface Props {
  label: string,
  isFloatingLabelFixed: boolean,
  value?: string,
  style?: any,
  errorText: string,
  hintText?: string,
  maxLength?: string,
  isPassword?: boolean,
  onChange: (event: any) => void
  validate: (text: string) => boolean
}

/**
 * All states owned by this component and their types
 */
interface State {
  textValue: string
  isValid: boolean
  isFocused: boolean
}

export default class ValidationTextField extends Component<Props, State> {

  /**
   * Initializes the ValidationTextField component states when it is first created
   * @param props props passed to this component
   */
  constructor(props: Props) {
    super(props)
    const { value } = this.props
    this.state = {
      textValue: value ? value : '',
      isValid: false,
      isFocused: false,
    }
  }

  /**
   * Validates text input when it is changed
   * @param event the changing of text event
   */
  onTextChange = (event: any) => {
    const { onChange, validate } = this.props
    onChange(event)
    this.setState({
      textValue: event.target.value,
      isValid: validate(event.target.value),
    })
  }

  /**
   * Validates text input when the field goes out of focus
   */
  onTextBlur = () => {
    const { validate } = this.props
    const { textValue } = this.state
    this.setState({
      isValid: validate(textValue),
      isFocused: true,
    })
  }

  /**
   * Renders the ValidationTextField layout
   */
  render() {
    const { label, isFloatingLabelFixed, style, hintText, errorText, maxLength, isPassword } = this.props
    const { textValue, isValid, isFocused } = this.state

    return (
      <TextField
        floatingLabelText={label}
        floatingLabelFixed={isFloatingLabelFixed}
        value={textValue}
        style={style ? style : ''}
        hintText={hintText ? hintText : ''}
        errorText={isValid || !isFocused ? '' : errorText}
        maxLength={maxLength ? maxLength : ''}
        onChange={this.onTextChange}
        onBlur={this.onTextBlur}
        type={isPassword ? 'password' : ''}
      />
    )
  }
}