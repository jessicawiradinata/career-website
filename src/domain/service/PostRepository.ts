/**
 * A collection of service methods to handle posts
 */
import axios from 'axios'
import * as Config from '../../constants/config'
import { Post } from '../../domain/model/Post'
import Rx from 'rxjs'
import { filter, map } from 'lodash'

export default class PostRepository {
  posts: Post[] = []
  // Uses rxjs to have an observable for posts to reduce amount of requests to the server
  postsSubject = new Rx.BehaviorSubject<Post[]>([])

  /**
   * Provides access to the posts observable
   */
  getPostsSubject = () => this.postsSubject

  /**
   * Requests the server to create a new post
   * @param newPost post to be created
   * @return success - true if successful, false otherwise
   * @return validToken - false if user token is invalid, null otherwise
   */
  createPost = async (newPost: Post): Promise<any> => {
    const response = await axios.post(`${Config.API_ENDPOINT}/posts`, {
      title: newPost.title,
      remuneration: newPost.remuneration,
      location: newPost.location,
      workType: newPost.workType,
      closingDate: newPost.closingDate,
      description: newPost.description,
      skills: newPost.skills,
      howToApply: newPost.howToApply,
      authorId: newPost.authorId,
    }, Config.HEADER)

    if (response.data.success) {
      this.getPosts()
    }

    return response
  }

  /**
   * Requests the server to update a post
   * @param postID ID of post to be updated
   * @param newPost contains new values to update post
   * @return success - true if successful, false otherwise
   * @return validToken - false if user token is invalid, null otherwise
   */
  updatePost = async (postId: string, newPost: Post): Promise<any> => {
    const response = await axios.put(`${Config.API_ENDPOINT}/posts/${postId}`, {
      title: newPost.title,
      remuneration: newPost.remuneration,
      location: newPost.location,
      workType: newPost.workType,
      closingDate: newPost.closingDate,
      description: newPost.description,
      skills: newPost.skills,
      howToApply: newPost.howToApply,
    }, Config.HEADER)

    if (response.data.success) {
      this.updateLocalPost(postId, newPost)
      this.postsSubject.next(this.posts)
    }

    return response
  }

  /**
   * Updates local post to be notified by the observable
   * @param postId ID of post to be updated
   * @param newPost contains new values to update post
   */
  updateLocalPost = (postId: string, newPost: Post) => {
    this.posts = map(this.posts, (post: Post) => {
      if (post._id === postId) {
        const authorId = newPost.authorId ? newPost.authorId : ''
        const createdAt = newPost.createdAt ? newPost.createdAt : undefined
        return {
          _id: postId,
          authorId: authorId,
          title: newPost.title,
          remuneration: newPost.remuneration,
          location: newPost.location,
          workType: newPost.workType,
          closingDate: newPost.closingDate,
          description: newPost.description,
          skills: newPost.skills,
          howToApply: newPost.howToApply,
          createdAt: createdAt,
        }
      }
      return post
    })
  }

  /**
   * Requests the server to delete a post and notifies the observable that post is removed
   * @param postId ID of post to be deleted
   */
  deletePost = async (postId: string) => {
    await axios.delete(`${Config.API_ENDPOINT}/posts/${postId}`)
    this.posts = filter(this.posts, (post) => post._id !== postId)
    this.postsSubject.next(this.posts)
  }

  /**
   * Gets all posts from the server and notifies observable
   */
  getPosts = async () => {
    const response = await axios.get(`${Config.API_ENDPOINT}/posts`)
    this.posts = response.data
    this.postsSubject.next(this.posts)
  }

  /**
   * Gets location suggestions from the server based on search text
   * @param searchText text to be searched
   */
  searchLocation = async (searchText: string): Promise<any> =>
    await axios.get(`${Config.API_ENDPOINT}/posts/searchLocation/${searchText}`)
}