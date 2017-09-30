import React, { Component } from 'react'
import { Paper, TextField, RaisedButton, SelectField, MenuItem, DatePicker } from 'material-ui'
import Header from '../../components/Header'
import moment from 'moment'

export default class EditPostLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      remuneration: '',
      workType: '',
      closingDate: '',
      description: '',
      howToApply: '',
    }
  }

  componentWillMount() {
    if (this.props.postDetails !== undefined) {
      const { title, remuneration, workType, closingDate, description, howToApply } = this.props.postDetails
      const date = moment(closingDate).toDate()
      console.log(date)
      this.setState({
        title,
        remuneration,
        workType,
        closingDate: date,
        description,
        howToApply
      })
      this.props.getPostDetails(this.props.postDetails)
    } else {
      const { title, remuneration, workType, closingDate, description, howToApply } = this.props.postDetailsBackUp
      const date = moment(closingDate).toDate()
      console.log(date)
      this.setState({
        title,
        remuneration,
        workType,
        closingDate: date,
        description,
        howToApply
      })
    }
  }

  render() {
    const { history, logout, updatePost } = this.props

    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} />
        <Paper style={styles.form} zDepth={1}>
          <h1>Edit Job Post</h1>
          <TextField 
            floatingLabelText="Title" 
            floatingLabelFixed
            style={styles.textField}
            onChange={(title) => this.setState({ title: title.target.value })}
            value={this.state.title}
          />
          <TextField 
            floatingLabelText="Remuneration" 
            floatingLabelFixed
            hintText="e.g. $20 - $25 per hour"
            style={styles.textField}
            onChange={(remuneration) => this.setState({ remuneration: remuneration.target.value })}
            value={this.state.remuneration}
          />
          <div style={styles.textField}>
            <SelectField
              floatingLabelText="Work Type"
              floatingLabelFixed
              value={this.state.workType}
              style={{ float: 'left', width: '45%' }}
              onChange={(event, index, value) => this.setState({ workType: value })}
            >
              <MenuItem value="Full Time" primaryText="Full Time" />
              <MenuItem value="Part Time" primaryText="Part Time" />
              <MenuItem value="Temporary" primaryText="Temporary" />
              <MenuItem value="Casual" primaryText="Casual" />
            </SelectField>
            <DatePicker 
              floatingLabelText="Closing Date"
              floatingLabelFixed
              mode="landscape" 
              style={{ marginLeft: '55%' }}
              textFieldStyle={{ width: '100%' }}
              defaultDate={this.state.closingDate}
              onChange={(event, value) => this.setState({ closingDate: value })}
            />
          </div>
          <TextField 
            floatingLabelText="Description" 
            floatingLabelFixed
            hintText="Job description, requirements, etc."
            style={styles.textField}
            multiLine
            onChange={(description) => this.setState({ description: description.target.value })}
            value={this.state.description}
          />
          <TextField 
            floatingLabelText="How to Apply" 
            floatingLabelFixed
            style={styles.textField}
            multiLine
            onChange={(howToApply) => this.setState({ howToApply: howToApply.target.value })}
            value={this.state.howToApply}
          />
          <RaisedButton 
            label="Update"
            primary={true} 
            style={styles.submitBtn}
            onClick={() => updatePost(
              this.state.title, 
              this.state.remuneration,
              this.state.workType,
              this.state.closingDate,
              this.state.description, 
              this.state.howToApply,
              history, 
              this.props.match.params.postId
            )}
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
      alignItems: 'center'
  },
  textField: {
      width: '55%',
  },
  submitBtn: {
      marginTop: 40,
  },
}