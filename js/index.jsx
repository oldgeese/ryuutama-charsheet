import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap';
import '../css/style.css';
import { createStore } from 'redux';
import searchApp from './reducers';
import { Provider } from 'react-redux';

const store = createStore(searchApp);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
