import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import posts from './blog/reducerBlog';


export default combineReducers({posts, form: reduxForm,});
