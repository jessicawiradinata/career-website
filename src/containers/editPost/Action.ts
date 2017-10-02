import * as ActionTypes from '../../constants/ActionTypes'
import * as Config from '../../constants/config'
import axios from 'axios'
import { History } from 'history'
import { Dispatch } from 'redux'

export const getPostDetails = (postDetails: any) => (dispatch: Dispatch<any>) => (() => {
  dispatch(getPostDetailsAction(postDetails))
})()

export const getPostDetailsAction = (payload: any) => ({
  type: ActionTypes.GET_POST_DETAILS,
  payload,
})

export const updatePost = (
  title: string,
  remuneration: string,
  location: string,
  workType: string,
  closingDate: any,
  description: string,
  skills: string[],
  howToApply: string,
  history: History,
  postId: string) =>
  (dispatch: Dispatch<any>) => (async () => {
  dispatch(updatePostRequested())
  axios.put(`${Config.API_ENDPOINT}/posts/${postId}`, {
    title: title,
    remuneration: remuneration,
    location: location,
    workType: workType,
    closingDate: closingDate,
    description: description,
    skills: skills,
    howToApply: howToApply,
  })
  .then(response => {
    dispatch(updatePostSuccess())
    history.push('/myposts')
  })
  .catch(error => {
    dispatch(updatePostFailed())
  })
})()

export const updatePostRequested = () => {
  return { type: ActionTypes.UPDATE_POST_REQUESTED }
}

export const updatePostSuccess = () => {
  return { type: ActionTypes.UPDATE_POST_SUCCESS }
}

export const updatePostFailed = () => {
  return { type: ActionTypes.UPDATE_POST_FAILED }
}