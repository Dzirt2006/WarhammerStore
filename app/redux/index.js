import { combineReducers } from 'redux';
import goodsReducer from './goods'
import orderReducer from './shoppingCart'
import userReducer from './user'

const appReducer = combineReducers({
  goods: goodsReducer,
  order: orderReducer,
  user: userReducer,
});

export default appReducer;