import React from 'react';
import { connect } from 'react-redux';
import NewPost from '../../components/NewPost/NewPost';
import { createPost } from '../../reducers/blog/actions';




export default connect(null, {createPost})(NewPost);