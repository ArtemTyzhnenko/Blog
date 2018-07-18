import * as actionType from './actionTypes';
import axios from 'axios';

const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = '?key=TYZHNENKOARTEM13';

const fetchPosts = () => ({
    type: actionType.FETCH_POSTS,
});

const receivePostsSuccess = (data) => ({
    type: actionType.RECEIVE_POSTS_SUCCESS
});

const receivePostsFail = () => ({
    type: actionType.RECEIVE_POSTS_FAIL
});


export const getPosts = () =>{
    return dispatch => {
        dispatch(fetchPosts());
        return axios.get(`${ROOT_URL}/posts${API_KEY}`)
            .then(data => dispatch(receivePostsSuccess(data)))
            .catch(error => dispatch(receivePostsFail(error)))
    }
}