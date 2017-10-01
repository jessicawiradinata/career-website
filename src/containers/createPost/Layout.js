import React, { Component } from 'react'
import { Paper, TextField, RaisedButton, SelectField, MenuItem, DatePicker } from 'material-ui'
import Header from '../../components/Header'
import ChipInput from 'material-ui-chip-input'

export default class CreatePostLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      remuneration: '',
      location: '',
      workType: '',
      closingDate: '',
      description: '',
      skills: '',
      howToApply: '',
    }
  }

  render() {
    const { history, logout, createPost, createPostStatus } = this.props
    
    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} />
        <Paper style={styles.form} zDepth={1}>
          <h1>Post an Internship</h1>
          <TextField 
            floatingLabelText="Title" 
            floatingLabelFixed
            style={styles.textField}
            onChange={(title) => this.setState({ title: title.target.value })}
          />
          <div style={styles.textField}>
            <TextField 
              floatingLabelText="Remuneration" 
              floatingLabelFixed
              hintText="e.g. $20 - $25 per hour"
              style={{ float: 'left', width: '45%' }}
              onChange={(remuneration) => this.setState({ remuneration: remuneration.target.value })}
            />
            <TextField 
              floatingLabelText="Location" 
              floatingLabelFixed
              hintText="e.g. Sydney, NSW"
              style={{ width: '45%', marginLeft: '10%' }}
              onChange={(location) => this.setState({ location: location.target.value })}
            />
          </div>
          
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
              onChange={(event, value) => this.setState({ closingDate: value })}
            />
          </div>
          <TextField 
            floatingLabelText="Description" 
            floatingLabelFixed
            style={styles.textField}
            multiLine
            onChange={(description) => this.setState({ description: description.target.value })}
          />
          <ChipInput
            floatingLabelText="Required Skills"
            floatingLabelFixed
            hintText="Type here and press 'enter' to submit each skill"
            style={styles.textField}
            onChange={(chips) => this.setState({ skills: chips })}
          />
          <TextField 
            floatingLabelText="How to Apply" 
            floatingLabelFixed
            style={styles.textField}
            multiLine
            onChange={(howToApply) => this.setState({ howToApply: howToApply.target.value })}
          />
          <RaisedButton 
            label={createPostStatus ? 'Loading...' : 'Submit'}
            primary
            style={styles.submitBtn} 
            onClick={() => createPost(
              this.state.title, 
              this.state.remuneration,
              this.state.location,
              this.state.workType,
              this.state.closingDate,
              this.state.description, 
              this.state.skills,
              this.state.howToApply,
              window.localStorage.id, 
              this.props.history
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