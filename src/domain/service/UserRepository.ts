/**
 * A collection of service methods to handle Users
 */
import axios from 'axios'
import * as Config from '../../constants/config'
import { User } from '../../domain/model/User'
import Rx from 'rxjs'
import { map } from 'lodash'

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
   * @param newName the user's new name
   * @return success - true if successful, false otherwise
   * @return validToken - false if user token is invalid, null otherwise
   */
  changeName = async(userId: string, newName: string): Promise<any> => {
    const response = await axios.put(`${Config.API_ENDPOINT}/users/${userId}`, {
      name: newName,
    }, Config.HEADER)

    if (response.data.success) {
      this.changeNameLocal(userId, newName)
      this.usersSubject.next(this.users)
      this.userSubject.next(this.user)
    }

    return response
  }

  /**
   * Updates local user to be notified by the observable
   * @param userId ID of user to be updated
   * @param newName new user's name for updating
   */
  changeNameLocal = (userId: string, newName: string) => {
    this.users = map(this.users, (user) => {
      if (user._id === userId) {
        const newUser = {
          _id: userId,
          email: user.email,
          name: newName,
          isAdmin: user.isAdmin,
        }
        this.user = newUser
        return newUser
      }
      return user
    })
  }
}