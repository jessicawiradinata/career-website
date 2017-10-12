/**
 * Provides data loading and access to services
 */
import PostRepository from './PostRepository'
import UserRepository from './UserRepository'

export default class DataLoadService {
  postRepository: PostRepository
  userRepository: UserRepository

  /**
   * Initializes available services
   * @param postRepository
   * @param userRepository
   */
  constructor(postRepository: PostRepository, userRepository: UserRepository) {
    this.postRepository = postRepository
    this.userRepository = userRepository
  }

  /**
   * Loads all existing posts and users to be used in the app
   */
  loadData = () => {
    this.postRepository.getPosts()
    this.userRepository.getUsers()
  }

  /**
   * Provides access to the post repository
   */
  getPostRepository = () => this.postRepository

  /**
   * Provides access to the user repository
   */
  getUserRepository = () => this.userRepository
}