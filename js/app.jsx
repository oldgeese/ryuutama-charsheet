// @flow
import React from 'react';
import Input from './input.jsx';
import CharSheet from './charsheet.jsx';
import Search from './search.jsx';
import { Route, Redirect, Switch, withRouter} from 'react-router-dom'

const InputWithRouter = withRouter(Input);

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/input" component={InputWithRouter} />
          <Route path="/char/:charId" component={CharSheet} />
          <Route path="/search/:mode/:searchString" component={Search} />
          <Redirect from="*" to="/input" />
        </Switch>
      </div>
    );
  }
}

export default App;
