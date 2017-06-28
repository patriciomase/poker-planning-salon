import React from 'react';
import { Fragment } from 'redux-little-router';

import About from './containers/about';
import Query from './containers/query';
import Home from './containers/home';

import logo from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <Fragment forRoute='/'>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Planning Poker Salon</h2>
            <span>User</span>
          </div>
          <Fragment forRoute='/'>
            <Home />
          </Fragment>
          <Fragment forRoute='/about'>
            <About />
          </Fragment>
          <Fragment forRoute='/query'>
            <Query />
          </Fragment>
        </div>
      </Fragment>
    );
  }
}

export default App;
