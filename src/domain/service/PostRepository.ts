import axios from 'axios'
import * as Config from '../../constants/config'
import { Post } from '../../domain/model/Post'
import Rx from 'rxjs'
import { filter, map } from 'lodash'

export default class PostRepository {
  posts: Post[] = []
  postsSubject = new Rx.BehaviorSubject<Post[]>([])

  getPostsSubject = () => this.postsSubject

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

  deletePost = async (postId: string) => {
    await axios.delete(`${Config.API_ENDPOINT}/posts/${postId}`)
    this.posts = filter(this.posts, (post) => post._id !== postId)
    this.postsSubject.next(this.posts)
  }

  getPosts = async () => {
    const response = await axios.get(`${Config.API_ENDPOINT}/posts`)
    this.posts = response.data
    this.postsSubject.next(this.posts)
  }
}