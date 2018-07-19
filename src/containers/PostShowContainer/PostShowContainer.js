import React from 'react';
import { connect } from 'react-redux';
import PostShow from '../../components/PostShow/PostShow';
import { getCurrentPost, deleteCurrentPost } from '../../reducers/blog/actions';


const mapStateToProps = ({ posts }, ownProps) => {
    return { post: posts.posts[ownProps.match.params.id]};
};

export default connect(mapStateToProps, { getCurrentPost, deleteCurrentPost })(PostShow);