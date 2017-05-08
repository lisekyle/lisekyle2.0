import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SubPage from './routes/SubPage';
import Header from './Header';
import './css/index.css';
import './css/grid.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/subpage" component={SubPage} />
    </div>
  </Router>,
  document.getElementById('root')
);
