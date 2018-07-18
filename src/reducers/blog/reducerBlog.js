import * as actionTypes from './actionTypes';

let initialState = {
    posts: {},
    isFetching: false,
    didInvalidate: false,
};

const posts = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS:
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
        case actionTypes.RECEIVE_POSTS_FAIL:
            return {
                ...state,
                posts: {},
                isFetching: false,
                didInvalidate: true,
            };
        default:
            return state;
    }
};

export default posts;