import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

    </Route>
  </Router>
  ),
  document.getElementById('root')
);
