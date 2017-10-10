import axios from 'axios'
import * as Config from '../../constants/config'

export default class AuthenticationService {
  login = (email: string, password: string): Promise<any> => (
    axios.post(`${Config.API_ENDPOINT}/auth/login`, {
      email: email,
      password: password,
    })
  )

  resetPassword = (email: string) => {
    axios.post(`${Config.API_ENDPOINT}/auth/resetpassword`, {
      email: email,
    })
  }

  logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }

  isLoggedIn = (): boolean => window.localStorage.token !== undefined

  isOwner = (authorId: string): boolean => window.localStorage.id === authorId
}