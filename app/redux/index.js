import { combineReducers } from 'redux';
import goodsReducer from './goods'

const appReducer = combineReducers({
  goods: goodsReducer,
});

export default appReducer;