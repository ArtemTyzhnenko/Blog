import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class NewPost extends Component {

    renderField = (field) => {
        const {meta:{touched, error}} = field;
        const ClassName = `form-group ${touched && error ? 'has-danger' : ''}`;
        return(
            <div className={ClassName}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    };

    onSubmit = (values) => {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    };


    render() {
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    label="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Add New Post</button>
                <Link to="/" className="btn btn-danger btn-cancel">Cancel</Link>
            </form>
        )
    }
}

const validate = (values) => {
    const errors = {};

    if(!values.title){
        errors.title = 'Enter a title';
    }
    if(!values.categories){
        errors.categories = 'Enter some categories';
    }
    if(!values.content){
        errors.content = 'Enter some categories';
    }

    return errors;
};

export default reduxForm({
    validate,
    form: 'PostNewForm',
})(NewPost) ;