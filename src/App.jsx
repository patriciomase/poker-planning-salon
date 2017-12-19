import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Fragment } from 'redux-little-router';

import Header from './components/Header/Header';
import Start from './containers/Start/Start';
import Home from './containers/Home/Home';
import Game from './containers/Game/Game';
import About from './containers/about';


class App extends React.Component {
  render() {
    return (
      <Fragment forRoute="/">
        <div className="App">
          <Fragment forRoute="/">
            <Start />
          </Fragment>
          <Fragment forRoute="/home">
            <div>
              <Header />
              <Home />
            </div>
          </Fragment>
          <Fragment forRoute="/about">
            <About />
          </Fragment>
          <Fragment forRoute="/game/:id">
            <Game />
          </Fragment>
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

App.propTypes = {
  userName: PropTypes.string
};

export default connect(mapStateToProps)(App);