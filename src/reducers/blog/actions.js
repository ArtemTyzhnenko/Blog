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

const sendPost = () => ({
    type: actionType.SEND_POST,
});

const sendPostSuccess = () => ({
    type: actionType.SEND_POST_SUCCESS,
});

const sendPostFail = () => ({
    type: actionType.SEND_POST_FAIL
});

const fetchCurrentPost = () => ({
    type: actionType.FETCH_CURRENT_POST,
});

const receiveCurrentPostSuccess = (id, data) => ({
    type: actionType.RECEIVE_CURRENT_POST_SUCCESS,
    id,
    data,
});

const receiveCurrentPostFail = () => ({
    type: actionType.RECEIVE_CURRENT_POST_FAIL
});

export const getPosts = () => {
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

export const createPost = (values, callback) => {
    return dispatch => {
        dispatch(sendPost());
        return axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
            .then(() => dispatch(sendPostSuccess()))
            .then(() => callback())
            .catch(error => dispatch(sendPostFail(error)))
    }
};

export const getCurrentPost = (id) => {
    return dispatch => {
        dispatch(fetchCurrentPost());
        return axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
            .then(response => dispatch(receiveCurrentPostSuccess(id, response.data)))
            .catch(error => dispatch(receiveCurrentPostFail(error)))
    }
};



