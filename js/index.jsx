// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Input from './input.jsx';
import CharSheet from './charsheet.jsx';
import Search from './search.jsx';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/input" />
      <Route path="input" component={Input} />
      <Route path="char/:charId" component={CharSheet} />
      <Route path="search/:mode/:searchString" component={Search} />
      <Route path="*" component={Input} />
    </Route>
  </Router>
  ),
  document.getElementById('root')
);
