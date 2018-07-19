import * as actionTypes from './actionTypes';

let initialState = {
    posts: {},
    isFetching: false,
    didInvalidate: false,
};

const posts = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS || actionTypes.SEND_POST || actionTypes.FETCH_CURRENT_POST:
            return {
                ...state,
                isFetching: true,
            };
        case actionTypes.RECEIVE_POSTS_SUCCESS:
            return {
                ...state,
                posts:{
                    ...action.data,
                },
                isFetching: false,
            };
        case actionTypes.SEND_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
            };
        case actionTypes.RECEIVE_CURRENT_POST_SUCCESS:
            return{
                ...state,
                posts: {
                    ...state.posts,
                    [action.id]: action.data,
                },
                isFetching: false,
            };
        case actionTypes.RECEIVE_POSTS_FAIL || actionTypes.SEND_POST_FAIL || actionTypes.RECEIVE_CURRENT_POST_FAIL:
            return {
                ...state,
                isFetching: false,
                didInvalidate: true,
            };
        default:
            return state;
    }
};

export default posts;