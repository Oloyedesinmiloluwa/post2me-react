import innitialState from './innitialState';
import actionTypes from '../actions/actionTypes';

const updateLikedPost = (storedPosts, likedPost) => {
//  const likedPostInStore = storedPosts.filter(post => post.id === likedPost.id)[0];
  storedPosts = storedPosts.map(post => {
   if(post.id === likedPost.id) return {...post, userLikes: likedPost.userLikes }
   return post;
 })
 return storedPosts;
//  post.userLikes = likedPost.userLikes;
// return 
 /*storedPosts.splice(likedPost.id, 1, {...likedPostInStore, userLikes: likedPost.userLikes });
 return [...storedPosts.filter(post => post.id !== likedPost.id), {...likedPostInStore, userLikes: likedPost.userLikes } ]; */
//  debugger;
//  return storedPosts;
}
const postReducer = (state = innitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_POSTS_SUCCESS:
    return [...action.posts];
    case actionTypes.LIKE_POST_SUCCESS:
    return updateLikedPost(state, action.post);
    case actionTypes.NEW_POST_SUCCESS:
    return [...state, action.post];
    default:
    return state;
  }

}
export default postReducer;
