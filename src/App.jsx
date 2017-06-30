import React from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'redux-little-router';

import About from './containers/about';
import Game from './containers/Game';
import Home from './containers/home';
import SocketManager from './containers/SocketManager';

import logo from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <Fragment forRoute='/'>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Planning Poker Salon</h2>
            <span>Hello, {this.props.userName}!</span>
          </div>
          <Fragment forRoute='/'>
            <Home />
          </Fragment>
          <Fragment forRoute='/about'>
            <About />
          </Fragment>
          <Fragment forRoute='/game/:id'>
            <Game />
          </Fragment>
          <SocketManager />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    router: state.router,
    userName: state.userName
  }
}

export default connect(mapStateToProps)(App);
