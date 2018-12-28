import innitialState from './innitialState';
import actionTypes from '../actions/actionTypes';

const postReducer = (state = innitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_POSTS_SUCCESS:
    return [...action.posts];
    default:
    return state;
  }

}
export default postReducer;
