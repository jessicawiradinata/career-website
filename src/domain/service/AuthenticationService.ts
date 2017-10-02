import axios from 'axios'
import * as Config from '../../constants/config'

export default class AuthenticationService {
  login = (email: string, password: string): Promise<any> => (
    axios.post(`${Config.API_ENDPOINT}/auth/login`, {
      email: email,
      password: password,
    })
  )

  logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }
}