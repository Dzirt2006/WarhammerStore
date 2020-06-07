import { combineReducers } from 'redux';
import goodsReducer from './goods'
import orderReducer from './shoppingCart'

const appReducer = combineReducers({
  goods: goodsReducer,
  order: orderReducer,
});

export default appReducer;