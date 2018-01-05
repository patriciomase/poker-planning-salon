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

    const goToGame = () => {
      this.props.navigation.navigateTo(`game/${Date.now()}`);
    };

    return (
      <div className="w3-row-padding w3-margin-top">

        <div className="w3-panel w3-leftbar w3-light-grey">
          <p className="w3-xlarge w3-serif">
            <i>"Make it as simple as possible, but not simpler."</i></p>
          <p>Albert Einstein</p>
        </div>

        <div className="w3-col s12 m6">
          <div className="w3-card-3 w3-border">
            <header className="w3-container w3-blue">
              <h3>{'New Room'}</h3>
            </header>
            <div className="w3-container w3-padding">

              <p>
                <label className="">{'Room Name:'}</label>
                <input className="w3-input w3-dim-gray w3-hover-border-green" type="text" />
              </p>
              <p>
                <label className="">{'Type of Weight:'}</label>
                <div className="w3-row-padding">
                  <div className="w3-half">
                    <input className="w3-radio" type="radio" name="weight" value="1" />
                    <label>{'Fibonnaci'}</label>
                  </div>
                  <div className="w3-half">
                    <input className="w3-radio" type="radio" name="weight" value="0" />
                    <label>{'T-Shirt Sizes'}</label>
                  </div>
                </div>
              </p>
              <p>
                <label className="">{'Creator can play also?'}</label>
                <div className="w3-row-padding">
                  <div className="w3-half">
                    <input className="w3-radio" type="radio" name="play" value="1" />
                    <label>{'Yes, I want to play'}</label>
                  </div>
                  <div className="w3-half">
                    <input className="w3-radio" type="radio" name="play" value="0" />
                    <label>{'No, I only want to manage'}</label>
                  </div>
                </div>
              </p>
            </div>
            <button className="w3-button w3-block w3-dark-grey" onClick={goToGame}>{'Create New Game'}</button>
          </div>
        </div>

        <div className="w3-col s12 m6 separator w3-hide-medium w3-hide-large" />

        <div className="w3-col s12 m6">
          <div className="w3-card-3 w3-border">
            <header className="w3-container w3-blue-gray">
              <h3>{'Join Room'}</h3>
            </header>
            <div className="w3-container w3-padding">
              <p>
                <label className="">{'Room Name:'}</label>
                <input className="w3-input w3-dim-gray w3-hover-border-green" type="text" />
              </p>
              <p>
                <label className="">{'Do you want to play?'}</label>
                <div className="w3-row-padding">
                  <div className="w3-half">
                    <input className="w3-radio" type="radio" name="play-existing" value="1" />
                    <label>{'Yes, I want to play'}</label>
                  </div>
                  <div className="w3-half">
                    <input className="w3-radio" type="radio" name="play-existing" value="0" />
                    <label>{'No, I only want to observe'}</label>
                  </div>
                </div>
              </p>
            </div>

            <button className="w3-button w3-block w3-dark-grey" onClick={goToGame}>{'Join Existing Game'}</button>
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
