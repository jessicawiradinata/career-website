import React, { Component } from 'react'
import { Card, CardHeader, CardTitle, Divider, CardActions, FlatButton, CardText } from 'material-ui'
import Header from '../../components/Header'

export default class MyPostsLayout extends Component {
  render() {
    const { history, logout } = this.props

    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} />
        <Card style={styles.postCard}>
          <CardTitle title="Junior Front End Developer" subtitle="Tim Corp." />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Edit" />
            <FlatButton label="Delete" secondary />
          </CardActions>
        </Card> 
      </div>
    )
  }
}

const styles = {
  postCard: {
    marginTop: 20
  }
}