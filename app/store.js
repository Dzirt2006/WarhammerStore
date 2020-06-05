import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import appReducer from './redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


let middleware = [
    // `withExtraArgument` gives us access to axios in our async action creators!
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
]
const RESET_STORE = 'RESET_STORE'
export const resetStore = () => ({ type: RESET_STORE })
const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined
    return appReducer(state, action)
  }
  return appReducer(state, action)
}
export default createStore(
    appReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)