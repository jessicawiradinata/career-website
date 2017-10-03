import * as ActionTypes from '../../constants/ActionTypes'
import { Dispatch } from 'redux'
import PostRepository from '../../domain/service/PostRepository'
import UserRepository from '../../domain/service/UserRepository'

const postRepository = new PostRepository()
const userRepository = new UserRepository()

export const getPosts = () => (dispatch: Dispatch<any>) => (async () => {
  try {
    const response = await postRepository.getPosts()
    dispatch(getPostsAction(response.data))
  } catch (error) {
    console.log(error)
  }
})()

export const getUsers = () => (dispatch: Dispatch<any>) => (async () => {
  try {
    const response = await userRepository.getUsers()
    dispatch(getUsersAction(response.data))
  } catch (error) {
    console.log(error)
  }
})()

export const getUsersAction = (payload: any) => ({
  type: ActionTypes.GET_USERS,
  payload,
})

export const getPostsAction = (payload: any) => ({
  type: ActionTypes.GET_POSTS,
  payload,
})