import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class BlogList extends Component {


    componentDidMount(){
        this.props.getPosts();
    };

    renderPosts = () => {
        const {posts} = this.props;
        return _.map(posts, post => {
             return(
                 <li className="list-group-item" key={post.id}>
                     <Link to={`/post/${post.id}`}>
                        {post.title}
                     </Link>
                 </li>
             )
         })
    };

    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/post/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

export default BlogList;