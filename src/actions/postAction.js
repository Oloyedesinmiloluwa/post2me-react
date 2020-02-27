import axios from 'axios';
import process from '../components/process';
import actionTypes from './actionTypes';
axios.defaults.headers.common.Authorization = `Bearer ${process.env.TOKEN}`;
const baseUrl = process.env.BASE_URL;
const likePostAction = (post) => {
    // debugger;
    return({
    type: actionTypes.LIKE_POST_SUCCESS,
    post
})};
const getAllPostsAction = (posts) => ({
    type: actionTypes.GET_ALL_POSTS_SUCCESS,
    posts
});
export const likePost = (id) => dispatch => {
    axios.put(`${baseUrl}/posts/${id}/like`)
        .then(res => {
            // debugger;
            dispatch(likePostAction(res.data.data));
            // debugger;
                // return console.log(res.data, 'SUCCESS');
            })
        .catch(err => console.log(err, 'fdfddd'));
};

export const getAllPosts = () => dispatch => {
    axios(`${baseUrl}/posts`)
    .then(res => {
    dispatch(getAllPostsAction(res.data))
        return res;
    })
    .catch(err => console.log(err, 'error'));
}

const newPostAction = (post) => ({
    type: actionTypes.NEW_POST_SUCCESS,
    post
})

export const newPost = (post) => dispatch => {
    console.log( {post});
    // axios.post('',{})
    axios.post(`${baseUrl}/posts`, {...post})
      .then(res => {
          dispatch(newPostAction(res.data.data))
      })
}
