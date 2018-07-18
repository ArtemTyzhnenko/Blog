import * as actionType from './actionTypes';
import axios from 'axios';
import _ from 'lodash'

const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = '?key=TYZHNENKOARTEM13';

const fetchPosts = () => ({
    type: actionType.FETCH_POSTS,
});

const receivePostsSuccess = (data) => ({
    type: actionType.RECEIVE_POSTS_SUCCESS,
    data,
});

const receivePostsFail = () => ({
    type: actionType.RECEIVE_POSTS_FAIL
});


export const getPosts = () =>{
    return dispatch => {
        dispatch(fetchPosts());
        return axios.get(`${ROOT_URL}/posts${API_KEY}`)
            .then(response => {
                const newResponse = _.mapKeys(response.data, 'id');
                dispatch(receivePostsSuccess(newResponse))
            })
            .catch(error => dispatch(receivePostsFail(error)))
    }
};