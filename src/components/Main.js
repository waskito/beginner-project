import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import {
  Link
} from 'react-router-dom';
// import background from '../images/nathan-anderson.jpg';

import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <Link to="/translator">
              <Jumbotron className="jumbo-translator">
                <h1 className="display-3 text-center text-uppercase">Translator</h1>
              </Jumbotron>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to="/calculator">
              <Jumbotron className="jumbo-calculator">
                <h1 className="display-3 text-center text-uppercase">Calculator</h1>
              </Jumbotron>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to="/currency">
              <Jumbotron className="jumbo-converter">
                <h1 className="display-3 text-center text-uppercase">Currency</h1>
              </Jumbotron>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

