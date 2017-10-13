/**
 * A collection of service methods to handle Users
 */
import axios from 'axios'
import * as Config from '../../constants/config'
import { User } from '../../domain/model/User'
import Rx from 'rxjs'

export default class UserRepository {
  user: User
  users: User[] = []
  // Uses rxjs to have an obervable for Users to reduce amount of requests to the server
  userSubject = new Rx.BehaviorSubject<User>({ _id: '', email: '', name: '', isAdmin: false })
  usersSubject = new Rx.BehaviorSubject<User[]>([])

  /**
   * Provides access to the users observables
   */
  getUserSubject = () => this.userSubject
  getUsersSubject = () => this.usersSubject

  /**
   * Gets a user from the server and notifies the observable
   * @param userId ID of user to be retrieved
   */
  getUser = async (userId: string) => {
    const response = await axios.get(`${Config.API_ENDPOINT}/users/${userId}`)
    this.user = response.data
    this.userSubject.next(this.user)
  }

  /**
   * Gets all users from the server and notifies the observable
   */
  getUsers = async () => {
    const response = await axios.get(`${Config.API_ENDPOINT}/users`)
    this.users = response.data
    this.usersSubject.next(this.users)
  }

  /**
   * Requests the server to create a new user
   * @param email email of user to be created
   * @param password password of user to be created
   * @param name name of user to be created
   */
  createUser = async (email: string, password: string, name: string) => {
    await axios.post(`${Config.API_ENDPOINT}/users`, {
      email: email,
      password: password,
      name: name,
    })
    this.getUsers()
  }

  /**
   * Request the server to update a user's name
   * @param userId the user's account id
   * @param name the user's newName
   */
  changeName = (userId: string, newName: string): Promise<any> => (
    axios.put(`${Config.API_ENDPOINT}/users/changeName/${userId}`, {
      name: newName,
    })
  )
}