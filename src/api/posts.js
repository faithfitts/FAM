import apiUrl from '../apiConfig'
import axios from 'axios'

// Create (Create a flower)
export const createPost = (post, user) => {
  return axios({
    url: apiUrl + '/posts',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { post: post }
  })
}

// Index All (Show All Flowers)
export const postIndexAll = user => {
  return axios({
    url: apiUrl + '/posts',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// Show (Show one flower)
export const showPost = (id, user) => {
  return axios({
    url: apiUrl + '/posts/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// Delete A Flower
export const postDelete = (id, user) => {
  return axios({
    url: apiUrl + '/posts/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// Update a Flower
export const updatePost = (id, post, user) => {
  return axios({
    url: apiUrl + '/posts/' + id,
    method: 'PATCH',
    data: { post: post },
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
