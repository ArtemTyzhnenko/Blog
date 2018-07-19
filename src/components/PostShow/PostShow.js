import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostShow extends Component {

    componentDidMount() {
        if(!this.props.post){
            const { id  } = this.props.match.params;
            this.props.getCurrentPost(id);
        }
    }

    handleDelete = () => {
        const { id  } = this.props.match.params;
        this.props.deleteCurrentPost(id, () => {
            this.props.history.push('/');
        });
    };

    render() {
        const { post } = this.props;

        return(
            post ?
            (
                <div>
                    <Link to="/">Back to list</Link>
                    <button className="btn btn-danger pull-xs-right" onClick={this.handleDelete}>
                        Delete Post
                    </button>
                    <div>
                        <h3>{post.title}</h3>
                        <h6>Categories: {post.categories}</h6>
                        <p>{post.content}</p>
                    </div>
                </div>)
                :
            <div>Loading...</div>
        )
    }
}

export default PostShow;