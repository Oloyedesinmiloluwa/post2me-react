import { combineReducers } from 'redux';
import postReducers from './postReducer';

const rootReducer = combineReducers({
  posts: postReducers
});
export default rootReducer;
