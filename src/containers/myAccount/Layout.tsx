/**
 * Layout for My Account page
 */
import React, { Component } from 'react'
import { RaisedButton, Divider, Paper } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { User } from '../../domain/model/User'
import { styles } from './styles'
import { myAccountStrings } from '../../constants/strings'
import ValidationTextField from '../../components/ValidationTextField/ValidationTextField'
import validator from 'validator'

/**
 * Props that can be passed to this layout and their types
 */
interface Props {
  history: History
  user: User
  isChangeNameProcessing: boolean
  isChangeNameSuccess: boolean
  isChangePassSuccess: boolean
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

  /**
   * Authenticates user when entering My Account page and redirects to home if not logged in
   */
  componentWillMount() {
    const { authenticate, history } = this.props
    authenticate(history)
  }

  /**
   * Validates whether the current password is not empty
   * @param currentPass password to be validated
   * @return true if current password is not empty, false otherwise
   */
  validateCurrentPass = (currentPass: string) => !validator.isEmpty(currentPass)

  /**
   * Validates whether the input is a valid password
   * @param newPass password to be validated
   * @return true if new password is valid, false otherwise
   */
  validateNewPass = (newPass: string) => validator.isLength(newPass, { min: 6, max: 20 })

  /**
   * Validates whether the password is equal to new password field
   * @param confirmNewPass password to be validated
   * @return true if the password is valid, false otherwise
   */
  validateConfirmNewPass = (confirmNewPass: string) => validator.equals(confirmNewPass, this.state.newPass)

  /**
   * Validates whether the input is a valid name
   * @param name name to be validated
   * @return true if name is valid, false otherwise
   */
  validateName = (name: string) => validator.isLength(name, { min: 3, max: 70 })

  /**
   * Disables change password save button if there are error validation fields
   */
  disableChangePassButton = () => {
    const { currentPass, newPass, confirmNewPass } = this.state
    return !this.validateCurrentPass(currentPass) || !this.validateNewPass(newPass) || !this.validateConfirmNewPass(confirmNewPass)
  }

  /**
   * Disables change name save button if there are error validation fields
   */
  disableChangeNameButton = () => {
    const { name } = this.state
    return !this.validateName(name)
  }

  /**
   * Renders the My Account page layout
   */
  render() {
    const { history, logout, user, changePassword, changeName, isChangeNameSuccess, isChangePassSuccess } = this.props
    const { currentPass, newPass, name } = this.state
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
            <ValidationTextField
              label={myAccountStrings.currentPassword}
              isFloatingLabelFixed={true}
              style={styles.textField}
              isPassword={true}
              errorText={myAccountStrings.currentPassError}
              onChange={(event: any) => this.setState({ currentPass: event.target.value })}
              validate={(currentPass: string) => this.validateCurrentPass(currentPass)}
            />
            <ValidationTextField
              label={myAccountStrings.newPassword}
              isFloatingLabelFixed={true}
              style={styles.textField}
              isPassword={true}
              errorText={myAccountStrings.newPassError}
              maxLength='20'
              onChange={(event: any) => this.setState({ newPass: event.target.value })}
              validate={(newPass: string) => this.validateNewPass(newPass)}
            />
            <ValidationTextField
              label={myAccountStrings.confirmPassword}
              isFloatingLabelFixed={true}
              style={styles.textField}
              isPassword={true}
              errorText={myAccountStrings.confirmPassError}
              maxLength='20'
              onChange={(event: any) => this.setState({ confirmNewPass: event.target.value })}
              validate={(confirmNewPass: string) => this.validateConfirmNewPass(confirmNewPass)}
            />
            <RaisedButton
              label={myAccountStrings.updateText}
              primary={true}
              style={styles.editBtn}
              onClick={() => changePassword(user.email, currentPass, newPass)}
              disabled={this.disableChangePassButton()}
            />
            {isChangePassSuccess &&
              <text style={styles.successText}>{myAccountStrings.passChangeSuccess}</text>
            }
          </Paper>
          <br/>
          <Paper style={styles.profileContainer as any} zDepth={0}>
            <h3 style={styles.titlePaper}>{myAccountStrings.contactDetailsHint}</h3>
            <ValidationTextField
              label={myAccountStrings.nameText}
              isFloatingLabelFixed={true}
              style={styles.textField}
              value={name}
              errorText={myAccountStrings.nameError}
              maxLength='70'
              onChange={(event: any) => this.setState({ name: event.target.value })}
              validate={(name: string) => this.validateName(name)}
            />
            <RaisedButton
              label={myAccountStrings.updateText}
              primary={true}
              style={styles.editBtn}
              onClick={() => changeName(name)}
              disabled={this.disableChangeNameButton()}
            />
            {isChangeNameSuccess &&
              <text style={styles.successText}>{myAccountStrings.nameChangeSuccess}</text>
            }
          </Paper>
        </div>
      </div>
    )
  }
}