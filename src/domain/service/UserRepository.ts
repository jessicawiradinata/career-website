import axios from 'axios'
import * as Config from '../../constants/config'
import { User } from '../../domain/model/User'
import Rx from 'rxjs'

export default class UserRepository {
  user: User
  users: User[] = []
  userSubject = new Rx.BehaviorSubject<User>({ _id: '', email: '', name: '', isAdmin: false })
  usersSubject = new Rx.BehaviorSubject<User[]>([])

  getUserSubject = () => this.userSubject
  getUsersSubject = () => this.usersSubject

  getUser = async (userId: string) => {
    const response = await axios.get(`${Config.API_ENDPOINT}/users/${userId}`)
    this.user = response.data
    this.userSubject.next(this.user)
  }

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