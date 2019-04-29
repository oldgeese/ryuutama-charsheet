import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
