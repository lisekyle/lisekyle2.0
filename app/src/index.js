import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import designLanguage from './routes/designLanguage';
import navigation from './routes/navigation';
import casestudies from './routes/casestudies';
import homepage from './routes/homepage';
import about from './routes/about';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/design-language" component={designLanguage} />
      <Route exact={true} path="/homepage" component={homepage} />
      <Route exact={true} path="/navigation" component={navigation} />
      <Route exact={true} path="/casestudies" component={casestudies} />
      <Route exact={true} path="/about" component={about} />


    </div>
  </Router>,
  document.getElementById('root')
);
