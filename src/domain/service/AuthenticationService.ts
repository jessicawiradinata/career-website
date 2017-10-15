/**
 * A collection of service methods to handle Authentication
 */
import axios from 'axios'
import * as Config from '../../constants/config'

export default class AuthenticationService {

  /**
   * Sends a request to server to authenticate user
   * @return promise from the server
   */
  login = (email: string, password: string): Promise<any> => (
    axios.post(`${Config.API_ENDPOINT}/auth/login`, {
      email: email,
      password: password,
    })
  )

  /**
   * Requests the server to reset a user's password
   * @param email the user's email
   */
  resetPassword = (email: string) => {
    axios.post(`${Config.API_ENDPOINT}/auth/resetpassword`, {
      email: email,
    })
  }

  /**
   * Requests the server to update a user's password
   * @param email the user's email
   * @param currentPass the user's current password
   * @param newPass the user's new password
   * @return success - true if successful, false otherwise
   * @return validToken - false if user token is invalid, null otherwise
   */
  changePassword = (email: string, currentPass: string, newPass: string): Promise<any> => (
    axios.post(`${Config.API_ENDPOINT}/auth/changepassword`, {
      email: email,
      password: currentPass,
      newPassword: newPass,
    }, Config.HEADER as any)
  )
}