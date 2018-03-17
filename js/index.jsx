// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Input from './input.jsx';
import CharSheet from './charsheet.jsx';
import Search from './search.jsx';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter} from 'react-router-dom'

const InputWithRouter = withRouter(Input);

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/input" component={InputWithRouter} />
        <Route path="/char/:charId" component={CharSheet} />
        <Route path="/search/:mode/:searchString" component={Search} />
        <Redirect from="*"to="/input" />
      </Switch>
    </App>
  </Router>
  ,
  document.getElementById('root')
);
