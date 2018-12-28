import axios from 'axios';
import process from '../components/process';
import actionTypes from './actionTypes';
axios.defaults.headers.common.Authorization = `Bearer ${process.env.TOKEN}`;
const baseUrl = process.env.BASE_URL;
export const likePost = (id) => dispatch => {
    axios.put(`${baseUrl}/posts/${id}/like`)
        .then(res => res)
        .catch(err => console.log(err, 'fdfddd'));
};
const getAllPostsAction = (posts) => ({
    type: actionTypes.GET_ALL_POSTS_SUCCESS,
    posts
});
export const getAllPosts = () => dispatch => {
    // debugger;
    axios(`${baseUrl}/posts`)
    .then(res => {
    dispatch(getAllPostsAction(res.data))
        return console.log(res.data);
    })
    .catch(err => console.log(err, 'error'));
}
