import React, { Component } from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui'
import Header from '../../components/Header'

export default class CreatePostLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
  }

  render() {
    const { history, logout, createPost, createPostStatus } = this.props
    
    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} />
        <Paper style={styles.form} zDepth={1}>
          <h1>Create Job Post</h1>
          <TextField 
            floatingLabelText="Title" 
            floatingLabelFixed={true}
            style={styles.textField}
            onChange={(title) => this.setState({ title: title.target.value })}
          />
          <TextField 
            floatingLabelText="Description" 
            floatingLabelFixed={true}
            style={styles.textField}
            multiLine={true}
            rows={4}
            onChange={(description) => this.setState({ description: description.target.value })}
          />
          <RaisedButton 
            label={createPostStatus ? 'Loading...' : 'Submit'}
            primary={true} 
            style={styles.submitBtn} 
            onClick={createPost(this.state.title, this.state.description, window.localStorage.id, this.props.history)}
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
      width: '50%',
  },
  submitBtn: {
      marginTop: 40,
  },
}