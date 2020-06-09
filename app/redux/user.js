import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

//action
const GET_USER = 'GET_USER'

//action creator
const gotMe = (user) => ({
  type: GET_USER,
  user
})

//thunk
export const getMe = () => dispatch => {
    return axios.get('/api/auth/me')
      .then(res => res.data)
      .then(user => dispatch(gotMe(user)))
      .catch(console.error.bind(console))
  }
export const login = (formData) => dispatch => {
    return axios.put('/api/auth/login', formData)
      .then(res => res.data)
      .then(user => dispatch(gotMe(user)))
      .catch(console.error.bind(console))
  }

  const initialState = {
    user: {}
  }

  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case GET_USER:
        return {
          ...state,
          user: action.user
        }
      default:
        return state
    }
  }