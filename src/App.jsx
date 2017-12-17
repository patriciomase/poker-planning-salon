import React from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'redux-little-router';

import About from './containers/about';
import Game from './containers/Game/Game';
import Home from './containers/Home/Home';
import Start from './containers/Start/Start';

import SocketManager from './containers/SocketManager';
import logo from './images/logo.svg';

class App extends React.Component {
  render() {
    return (
      <Fragment forRoute="/">
        <div className="App">
          <Fragment forRoute="/">
            <Start />
          </Fragment>
          <Fragment forRoute="/home">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{'Planning Poker Salon'}</h2>
            <span>{'Hello, ' + this.props.userName}</span>
          </div>  
          <Home />
        </Fragment>
          <Fragment forRoute="/about">
            <About />
          </Fragment>
          <Fragment forRoute="/game/:id">
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
    userName: state.userName || state.defaultUserName
  };
};

export default connect(mapStateToProps)(App);