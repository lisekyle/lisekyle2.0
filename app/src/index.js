import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import designLanguage from './routes/designLanguage';
import navigation from './routes/navigation';
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
      <Route exact={true} path="/design-language" component={designLanguage} />
      <Route exact={true} path="/navigation" component={navigation} />

    </div>
  </Router>,
  document.getElementById('root')
);
