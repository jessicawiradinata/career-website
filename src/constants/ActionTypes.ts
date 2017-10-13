/**
 * A collection of Action Types to be identified by the reducers
 */
export type LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export type LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export type LOGIN_FAILED = 'LOGIN_FAILED'
export type VALID_LOGIN_EMAIL = 'VALID_LOGIN_EMAIL'
export type VALID_LOGIN_PASSWORD = 'VALID_LOGIN_PASSWORD'
export type INVALID_LOGIN_EMAIL = 'INVALID_LOGIN_EMAIL'
export type INVALID_LOGIN_PASSWORD = 'INVALID_LOGIN_PASSWORD'

export const LOGIN_REQUESTED: LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_SUCCESS: LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED: LOGIN_FAILED = 'LOGIN_FAILED'
export const VALID_LOGIN_EMAIL: VALID_LOGIN_EMAIL = 'VALID_LOGIN_EMAIL'
export const VALID_LOGIN_PASSWORD: VALID_LOGIN_PASSWORD = 'VALID_LOGIN_PASSWORD'
export const INVALID_LOGIN_EMAIL: INVALID_LOGIN_EMAIL = 'INVALID_LOGIN_EMAIL'
export const INVALID_LOGIN_PASSWORD: INVALID_LOGIN_PASSWORD = 'INVALID_LOGIN_PASSWORD'

export type SIGNUP_REQUESTED = 'SIGNUP_REQUESTED'
export type SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export type SIGNUP_FAILED = 'SIGNUP_FAILED'
export type VALID_SIGNUP_EMAIL = 'VALID_SIGNUP_EMAIL'
export type VALID_SIGNUP_PASSWORD = 'VALID_SIGNUP_PASSWORD'
export type VALID_SIGNUP_NAME = 'VALID_SIGNUP_NAME'
export type INVALID_SIGNUP_EMAIL = 'INVALID_SIGNUP_EMAIL'
export type INVALID_SIGNUP_PASSWORD = 'INVALID_SIGNUP_PASSWORD'
export type INVALID_SIGNUP_NAME = 'INVALID_SIGNUP_NAME'

export const SIGNUP_REQUESTED: SIGNUP_REQUESTED = 'SIGNUP_REQUESTED'
export const SIGNUP_SUCCESS: SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILED: SIGNUP_FAILED = 'SIGNUP_FAILED'
export const VALID_SIGNUP_EMAIL: VALID_SIGNUP_EMAIL = 'VALID_SIGNUP_EMAIL'
export const VALID_SIGNUP_PASSWORD: VALID_SIGNUP_PASSWORD = 'VALID_SIGNUP_PASSWORD'
export const VALID_SIGNUP_NAME: VALID_SIGNUP_NAME = 'VALID_SIGNUP_NAME'
export const INVALID_SIGNUP_EMAIL: INVALID_SIGNUP_EMAIL = 'INVALID_SIGNUP_EMAIL'
export const INVALID_SIGNUP_PASSWORD: INVALID_SIGNUP_PASSWORD = 'INVALID_SIGNUP_PASSWORD'
export const INVALID_SIGNUP_NAME: INVALID_SIGNUP_NAME = 'INVALID_SIGNUP_NAME'

export type CREATE_POST_REQUESTED = 'CREATE_POST_REQUESTED'
export type CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export type CREATE_POST_FAILED = 'CREATE_POST_FAILED'

export const CREATE_POST_REQUESTED: CREATE_POST_REQUESTED = 'CREATE_POST_REQUESTED'
export const CREATE_POST_SUCCESS: CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAILED: CREATE_POST_FAILED = 'CREATE_POST_FAILED'

export type GET_USER_POSTS = 'GET_USER_POSTS'
export type GET_USER = 'GET_USER'
export type GET_USERS = 'GET_USERS'

export const GET_USER: GET_USER = 'GET_USER'
export const GET_USER_POSTS: GET_USER_POSTS = 'GET_USER_POSTS'
export const GET_USERS: GET_USERS = 'GET_USERS'

export type GET_POSTS = 'GET_POSTS'

export const GET_POSTS: GET_POSTS = 'GET_POSTS'

export type DELETE_POST_REQUESTED = 'DELETE_POST_REQUESTED'
export type DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export type DELETE_POST_FAILED = 'DELETE_POST_FAILED'

export const DELETE_POST_REQUESTED: DELETE_POST_REQUESTED = 'DELETE_POST_REQUESTED'
export const DELETE_POST_SUCCESS: DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAILED: DELETE_POST_FAILED = 'DELETE_POST_FAILED'

export type GET_POST_DETAILS_REQUESTED = 'GET_POST_DETAILS_REQUESTED'
export type GET_POST_DETAILS = 'GET_POST_DETAILS'

export const GET_POST_DETAILS_REQUESTED: GET_POST_DETAILS_REQUESTED = 'GET_POST_DETAILS_REQUESTED'
export const GET_POST_DETAILS: GET_POST_DETAILS = 'GET_POST_DETAILS'

export type UPDATE_POST_REQUESTED = 'UPDATE_POST_REQUESTED'
export type UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
export type UPDATE_POST_FAILED = 'UPDATE_POST_FAILED'

export const UPDATE_POST_REQUESTED: UPDATE_POST_REQUESTED = 'UPDATE_POST_REQUESTED'
export const UPDATE_POST_SUCCESS: UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
export const UPDATE_POST_FAILED: UPDATE_POST_FAILED = 'UPDATE_POST_FAILED'

export type CHANGE_PASSWORD_REQUESTED = 'CHANGE_PASSWORD_REQUESTED'
export type CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'
export type CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED'

export const CHANGE_PASSWORD_REQUESTED: CHANGE_PASSWORD_REQUESTED = 'CHANGE_PASSWORD_REQUESTED'
export const CHANGE_PASSWORD_SUCCESS: CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'
export const CHANGE_PASSWORD_FAILED: CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED'

export type LOGOUT = 'LOGOUT'

export const LOGOUT: LOGOUT = 'LOGOUT'

export type SEARCH_LOCATION = 'SEARCH_LOCATION'

export const SEARCH_LOCATION: SEARCH_LOCATION = 'SEARCH_LOCATION'