import axios from 'axios'
import * as Config from '../../constants/config'
import { Post } from '../../domain/model/Post'

export default class PostRepository {
  createPost = (post: Post): Promise<any> => (
    axios.post(`${Config.API_ENDPOINT}/posts`, {
      title: post.title,
      remuneration: post.remuneration,
      location: post.location,
      workType: post.workType,
      closingDate: post.closingDate,
      description: post.description,
      skills: post.skills,
      howToApply: post.howToApply,
      authorId: post.authorId,
    })
  )

  updatePost = (postId: string, post: Post): Promise<any> => (
    axios.put(`${Config.API_ENDPOINT}/posts/${postId}`, {
      title: post.title,
      remuneration: post.remuneration,
      location: post.location,
      workType: post.workType,
      closingDate: post.closingDate,
      description: post.description,
      skills: post.skills,
      howToApply: post.howToApply,
    })
  )

  deletePost = (postId: string): Promise<any> => (
    axios.delete(`${Config.API_ENDPOINT}/posts/${postId}`)
  )

  getUserPosts = (userId: string): Promise<any> => (
    axios.get(`${Config.API_ENDPOINT}/posts/users/${userId}`)
  )
}