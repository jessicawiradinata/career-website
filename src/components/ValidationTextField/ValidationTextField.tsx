import React, { Component } from 'react'
import { TextField } from 'material-ui'

interface Props {
  label: string,
  isFloatingLabelFixed: boolean,
  value?: string,
  style?: any,
  errorText: string,
  hintText?: string,
  maxLength?: string,
  onChange: (event: any) => void
  validate: (text: string) => boolean
}

interface State {
  textValue: string
  isValid: boolean
  isFocused: boolean
}

export default class ValidationTextFields extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const { value } = this.props
    this.state = {
      textValue: value ? value : '',
      isValid: false,
      isFocused: false,
    }
  }

  onTextChange = (event: any) => {
    const { onChange, validate } = this.props
    onChange(event)
    this.setState({
      textValue: event.target.value,
      isValid: validate(event.target.value),
    })
  }

  onTextBlur = () => {
    const { validate } = this.props
    const { textValue } = this.state
    this.setState({
      isValid: validate(textValue),
      isFocused: true,
    })
  }

  render() {
    const { label, isFloatingLabelFixed, style, hintText, errorText, maxLength } = this.props
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
      />
    )
  }
}