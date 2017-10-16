/**
 * Layout for My Account page
 */
import React, { Component } from 'react'
import { RaisedButton, TextField, Divider, Paper } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { User } from '../../domain/model/User'
import { styles } from './styles'
import { myAccountStrings } from '../../constants/strings'

/**
 * Props that can be passed to this layout and their types
 */
interface Props {
  history: History
  user: User
  isChangeNameProcessing: boolean
  isChangeNameSuccess: boolean
  isChangePasswordSuccess: boolean
  validConfirmPassword: boolean
  logout: (history: History) => void
  authenticate: (history: History) => void
  changePassword: (email: string, currentPass: string, newPass: string) => void
  changeName: (newName: string) => void
}

/**
 * All states owned by this layout and their types
 */
interface State {
  currentPass: string,
  newPass: string,
  confirmNewPass: string,
  name: string,
}

export default class MyAccountLayout extends Component<Props, State> {

  /**
   * Initializes the My Account page states when it is first created
   * @param props props passed to this layout
   */
  constructor(props: Props) {
    super(props)
    const { user } = this.props
    this.state = {
      currentPass: '',
      newPass: '',
      confirmNewPass: '',
      name: user.name,
    }
  }

  confirmpassOnChange = (newPass: any, confirmNewPass: any) => {
    return newPass === confirmNewPass
  }

  /**
   * Authenticates user when entering My Account page and redirects to home if not logged in
   */
  componentWillMount() {
    const { authenticate, history } = this.props
    authenticate(history)
  }

  /**
   * Renders the My Account page layout
   */
  render() {
    const { history, logout, user, changePassword, changeName, isChangeNameSuccess, isChangePasswordSuccess } = this.props
    const { currentPass, newPass, confirmNewPass, name } = this.state
    const isAdmin = user ? user.isAdmin : false

    return (
      <div>
        <Header history={history} isLoggedIn={true} logout={logout} isAdmin={isAdmin} />
        <div style={styles.pageContainer}>
          <Paper style={styles.profileLayout as any}>
            <h2>{myAccountStrings.myAccountTitle}</h2>
          </Paper>
          <Divider />
          <Paper style={styles.profileContainer as any} zDepth={0}>
            <h3 style={styles.titlePaper}>{myAccountStrings.changePassword}</h3>
            <TextField
              floatingLabelText={myAccountStrings.currentPassword}
              floatingLabelFixed={true}
              type={myAccountStrings.password}
              style={styles.textField}
              onChange={(currentPass: any) => this.setState({ currentPass: currentPass.target.value })}
            />
            <TextField
              floatingLabelText={myAccountStrings.newPassword}
              floatingLabelFixed={true}
              type={myAccountStrings.password}
              style={styles.textField}
              onChange={(newPass: any) => this.setState({ newPass: newPass.target.value })}
            />
            <TextField
              floatingLabelText={myAccountStrings.ConfirmPassword}
              floatingLabelFixed={true}
              type={myAccountStrings.password}
              style={styles.textField}
              onChange={(confirmNewPass: any) => this.setState({ confirmNewPass: confirmNewPass.target.value })}
              errorText={this.confirmpassOnChange(newPass, confirmNewPass) ? '' : myAccountStrings.confirmPasswordHint}
            />
            <RaisedButton
              label={myAccountStrings.updateText}
              primary={true}
              style={styles.editBtn}
              onClick={() => changePassword(user.email, currentPass, newPass)}
            />
            {isChangePasswordSuccess &&
              <div style={styles.greenNotification as any}>{myAccountStrings.passSuccessHint}</div>
            }
          </Paper>
          <Paper style={styles.profileContainer as any} zDepth={0}>
            <h3 style={styles.titlePaper}>{myAccountStrings.contactDetailsHint}</h3>
            <TextField
              floatingLabelText={myAccountStrings.nameText}
              floatingLabelFixed={true}
              style={styles.textField}
              value={name}
              onChange={(name: any) => this.setState({ name: name.target.value })}
            />
            <RaisedButton
              label={myAccountStrings.updateText}
              primary={true}
              style={styles.editBtn}
              onClick={() => changeName(name)}
            />
            {isChangeNameSuccess &&
              <div style={styles.greenNotification as any}>{myAccountStrings.nameSuccessHint}</div>
            }
          </Paper>
        </div>
      </div>
    )
  }
}