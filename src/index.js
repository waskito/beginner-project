import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  // Link
} from 'react-router-dom'

const el = document.getElementById('root');
// react-dom (what we'll use here)

ReactDOM.render((
  <Router>
    <App />
  </Router>
), el);
registerServiceWorker();
