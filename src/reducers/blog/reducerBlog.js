import * as actionTypes from './actionTypes';

let initialState = {
    blog: {},
    isFetching: false,
    didInvalidate: false,
};

const blog = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS:
            return {
                ...state,
                isFetching: true,
            };
        case actionTypes.RECEIVE_POSTS_SUCCESS:
            return {
                ...state,
                blog:{
                    ...action.data,
                },
                isFetching: false,
            };
        case actionTypes.RECEIVE_POSTS_FAIL:
            return {
                ...state,
                blog: {},
                isFetching: false,
                didInvalidate: true,
            };
        default:
            return state;
    }
};

export default blog;