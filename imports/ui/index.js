import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './pages/Layout';
import Home from './pages/Home';
import FilteredList from './pages/FilteredList';
import ErrorPage from './pages/ErrorPage';
import Instructions from './pages/Instructions';
import Register from './pages/Register';
import Login from './pages/Login';

export const routes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={Layout}>
      <Route path="home" component={Home}></Route>
      <Route path="instructions" component={Instructions}></Route>
      <Route path="filtered-list" component={FilteredList}></Route>
      <Route path="register" component={Register}></Route>
      <Route path="login" component={Login}></Route>
      <Route path="*" component={ErrorPage}></Route>
    </Route>
  </Router>
);
