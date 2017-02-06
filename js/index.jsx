import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import InputCharId from './input-char-id.jsx';
import CharSheet from './charsheet.jsx';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/input" />
      <Route path="input" component={InputCharId} />
      <Route path="char/:charId" component={CharSheet} />
    </Route>
  </Router>
  ),
  document.getElementById('root')
);
