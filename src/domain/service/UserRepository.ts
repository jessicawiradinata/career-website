import axios from 'axios'
import * as Config from '../../constants/config'
import { User } from '../../domain/model/User'
import Rx from 'rxjs'

export default class UserRepository {
  users: User[] = []
  usersSubject = new Rx.BehaviorSubject<User[]>([])

  getUsersSubject = () => this.usersSubject

  getUser = (userId: string): Promise<any> => (
    axios.get(`${Config.API_ENDPOINT}/users/${userId}`)
  )

  getUsers = async () => {
    const response = await axios.get(`${Config.API_ENDPOINT}/users`)
    this.users = response.data
    this.usersSubject.next(this.users)
  }

  createUser = async (email: string, password: string, name: string) => {
    await axios.post(`${Config.API_ENDPOINT}/users`, {
      email: email,
      password: password,
      name: name,
    })
    this.getUsers()
  }
}