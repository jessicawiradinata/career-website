import React, { Component } from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui'
import Header from '../../components/Header'

export default class EditPostLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      titleValue: '',
      descriptionValue: ''
    }
  }

  componentWillMount() {
    const { getPostDetails } = this.props
    getPostDetails(this.props.match.params.postId)
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
            label="Update"
            primary={true} 
            style={styles.submitBtn}
            onClick={() => updatePost(this.state.title, this.state.description, history, this.props.match.params.postId)}
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