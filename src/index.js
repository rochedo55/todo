import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
  

ReactDOM.render(<Router>
    <Switch>
      <Route path="/" exact={true} component={Home}>
      </Route>
      <Route path="/About" component={About}>
      </Route>
    </Switch>
  </Router>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
