import React from 'react';
import { connect } from 'react-redux';

// Components.
import {
  navigateTo,
  updateUserName
} from '../../actions/index';

import './home.scss';

class Home extends React.Component {

  render() {

    // const goToGame = () => {
    //   this.props.navigation.navigateTo(`game/${Date.now()}`);
    // };

    return (
      <div className="w3-row-padding w3-margin-top">
        <div className="w3-col s12 m6">
          <div className="w3-card-3 w3-hover-shadow">
            <header className="w3-container w3-green">
              <h3>New Game</h3>
            </header>
            <div className="w3-container w3-gray w3-padding">
              <input className="w3-input w3-gray" type="text" />
              <label className="w3-text-light-gray">Room Name</label>
            </div>
            <button className="w3-button w3-block w3-dark-grey">Create New Game</button>
          </div>
        </div>
        <div className="w3-col s12 m6">
          <div className="w3-card-3 w3-hover-shadow">
            <header className="w3-container w3-green">
              <h3>Join Game</h3>
            </header>
            <div className="w3-container w3-gray">
            </div>
            <button className="w3-button w3-block w3-dark-grey">Join Existing Game</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: (state.userName !== null) ? state.userName : state.defaultUserName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigation: {
      navigateTo: (path) => dispatch(navigateTo(path))
    },
    typing: {
      updateUserName: (userName) => dispatch(updateUserName(userName))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
