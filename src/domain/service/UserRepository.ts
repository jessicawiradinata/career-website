import axios from 'axios'
import * as Config from '../../constants/config'

export default class UserRepository {
  getUser = (userId: string): Promise<any> => (
    axios.get(`${Config.API_ENDPOINT}/users/${userId}`)
  )
}