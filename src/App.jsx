import React from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'redux-little-router';

import About from './containers/about';
import CookiesChecker from './CookiesChecker';
import Game from './containers/Game';
import Home from './containers/home';
import SocketManager from './containers/SocketManager';

// Actions.
import { updateUserName } from './actions';

import logo from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <CookiesChecker
        cookieName="userName"
        updateUserName={this.props.updateUserName}
        render={() => (
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
        )}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    router: state.router,
    userName: state.userName || state.defaultUserName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserName: (userName) => { dispatch(updateUserName(userName)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
