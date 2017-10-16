/**
 * Specifies configurations for this app
 */

export const API_ENDPOINT = 'http://192.168.1.15:8080/api'
export const HEADER = {
  headers: {
    'token': window.localStorage.token
  }
}