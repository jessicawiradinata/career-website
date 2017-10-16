/**
 * A Select Field component which provides work type selections
 */
import React, { Component } from 'react'
import { SelectField, MenuItem } from 'material-ui'
import { postformStrings } from '../../constants/strings'

/**
 * Props that can be passed to this component and their types
 */
interface Props {
  value: string
  style: any
  onChange: (event: any, index: any, value: string) => void
}

/**
 * All states owned by this component and their types
 */
interface State {
  workType: string
}

export default class WorkTypeSelectField extends Component<Props, State> {

  /**
   * Initializes the ValidationTextField component states when it is first created
   * @param props props passed to this component
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      workType: this.props.value,
    }
  }

  /**
   * Sets workType state based on the selected field
   * @param event the changing of value event
   * @param index the index of selected value
   * @param value the value of the selection
   */
  onValueChange = (event: any, index: number, value: string) => {
    this.props.onChange(event, index, value)
    this.setState({ workType: value })
  }

  /**
   * Renders the WorkTypeSelectField component layout
   */
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