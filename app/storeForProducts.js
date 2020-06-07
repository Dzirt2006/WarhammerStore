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

export default createStore(
    appReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)