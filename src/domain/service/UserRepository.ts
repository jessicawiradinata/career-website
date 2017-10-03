import axios from 'axios'
import * as Config from '../../constants/config'

export default class UserRepository {
  getUser = (userId: string): Promise<any> => (
    axios.get(`${Config.API_ENDPOINT}/users/${userId}`)
  )

  getUsers = (): Promise<any> => (
    axios.get(`${Config.API_ENDPOINT}/users`)
  )

  createUser = (email: string, password: string, name: string): Promise<any> => (
    axios.post(`${Config.API_ENDPOINT}/users`, {
      email: email,
      password: password,
      name: name,
    })
  )
}