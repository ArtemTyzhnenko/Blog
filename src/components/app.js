import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogListContainer from '../containers/BlogListContainer/BlogListContainer';
import NewPostContainer from '../containers/NewPostContainer/NewPostContainer';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/posts/new" component={NewPostContainer}/>
                    <Route path="/" component={BlogListContainer}/>
                </Switch>
            </BrowserRouter>

        );
    }
}
