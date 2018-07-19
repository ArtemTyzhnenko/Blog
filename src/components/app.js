import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogListContainer from '../containers/BlogListContainer/BlogListContainer';
import NewPostContainer from '../containers/NewPostContainer/NewPostContainer';
import PostShowContainer from '../containers/PostShowContainer/PostShowContainer'

import './App.scss'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/post/new" component={ NewPostContainer } />
                    <Route path="/post/:id" component={ PostShowContainer } />
                    <Route path="/" component={ BlogListContainer } />
                </Switch>
            </BrowserRouter>
        );
    }
}
