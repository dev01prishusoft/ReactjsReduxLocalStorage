import React from 'react';
import {
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import BlogsList from './modules/blogs/BlogLists';
import LoginPage from './modules/login/Login';
import AddBlogPage from './modules/blogs/AddBlog';

const AppRouter = (props) => (
  <div className="fullHeight">
    <Router history={props.history}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={BlogsList} />
        <Route exact path="/addBlog" component={AddBlogPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </div>
);

export default AppRouter;
