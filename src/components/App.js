import React, { Component } from 'react';
import Calculator from './Calculator.js';
import CurrencyConverter from './CurrencyConverter.js';
import Main from './Main.js';
import Translator from './Translator.js';
import Navbar from './Navbar.js';
import {
  Route
} from 'react-router-dom';
// import background from '../images/nathan-anderson.jpg';

import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Navbar/>
          <div className="container">
            <div className="content">
              <Route exact path="/" component={Main} />
              <Route path="/translator" component={Translator} />
              <Route path="/calculator" component={Calculator} />
              <Route path="/currency" component={CurrencyConverter} />
            </div>
          </div>
          <footer className="footer">
            <div className="container">
              <hr/>
              <p className="text-center"><small>Made with <span className="text-red">❤</span> by Beginner</small></p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

