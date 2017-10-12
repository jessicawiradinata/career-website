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
   */
  createPost = async (newPost: Post) => {
    await axios.post(`${Config.API_ENDPOINT}/posts`, {
      title: newPost.title,
      remuneration: newPost.remuneration,
      location: newPost.location,
      workType: newPost.workType,
      closingDate: newPost.closingDate,
      description: newPost.description,
      skills: newPost.skills,
      howToApply: newPost.howToApply,
      authorId: newPost.authorId,
    })
    this.getPosts()
  }

  /**
   * Requests the server to update a post
   * @param postID ID of post to be updated
   * @param newPost contains new values to update post
   */
  updatePost = async (postId: string, newPost: Post) => {
    await axios.put(`${Config.API_ENDPOINT}/posts/${postId}`, {
      title: newPost.title,
      remuneration: newPost.remuneration,
      location: newPost.location,
      workType: newPost.workType,
      closingDate: newPost.closingDate,
      description: newPost.description,
      skills: newPost.skills,
      howToApply: newPost.howToApply,
    })
    this.updateLocalPost(postId, newPost)
    this.postsSubject.next(this.posts)
  }

  /**
   * Updates the local post to be notified by the observable
   * @param postId ID of post to be updated
   * @param newPost contains new values to udpdate post
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
}