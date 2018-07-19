import React from 'react';
import { connect } from 'react-redux';
import BlogList from '../../components/BlogList/BlogList';

import {getPosts} from '../../reducers/blog/actions';

const mapStateToProps = ({posts}) =>{
    return{
        posts: posts.posts,
    }
};

export default connect(mapStateToProps, {getPosts})(BlogList);