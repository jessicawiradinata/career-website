import PostRepository from './PostRepository'
import UserRepository from './UserRepository'

export default class DataLoadService {
  postRepository: PostRepository
  userRepository: UserRepository

  constructor(postRepository: PostRepository, userRepository: UserRepository) {
    this.postRepository = postRepository
    this.userRepository = userRepository
  }

  loadData = () => {
    this.postRepository.getPosts()
    this.userRepository.getUsers()
  }

  getPostRepository = () => this.postRepository

  getUserRepository = () => this.userRepository
}