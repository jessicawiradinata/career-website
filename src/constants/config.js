/**
 * Specifies configurations for this app
 */

export const API_ENDPOINT = 'http://ec2-18-220-149-76.us-east-2.compute.amazonaws.com:8080/api'
export const HEADER = {
  headers: {
    'token': window.localStorage.token
  }
}