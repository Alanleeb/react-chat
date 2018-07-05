import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import massages from './messages';

const rootReducer = combineReducers({
  user,
  flash,
  mesages
});

export default rootReducer;

