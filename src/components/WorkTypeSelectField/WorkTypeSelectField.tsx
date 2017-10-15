import React, { Component } from 'react'
import { SelectField, MenuItem } from 'material-ui'
import { postformStrings } from '../../constants/strings'

interface Props {
  value: string
  onChange: (event: any, index: any, value: string) => void
  style: any
}

interface State {
  workType: string
}

export default class WorkTypeSelectField extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      workType: this.props.value,
    }
  }

  onValueChange = (event: any, index: any, value: string) => {
    this.props.onChange(event, index, value)
    this.setState({ workType: value })
  }

  render() {
    return (
      <div>
        <SelectField
        floatingLabelText={postformStrings.workType}
        floatingLabelFixed
        value={this.state.workType}
        onChange={this.onValueChange}
        style={this.props.style}>
        <MenuItem value={postformStrings.fullTime} primaryText={postformStrings.fullTime} />
        <MenuItem value={postformStrings.partTime} primaryText={postformStrings.partTime} />
        <MenuItem value={postformStrings.temporary} primaryText={postformStrings.temporary} />
        <MenuItem value={postformStrings.casual} primaryText={postformStrings.casual} />
      </SelectField>
      </div>
    )
  }
}