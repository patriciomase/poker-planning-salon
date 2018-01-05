import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions.
import { navigateTo, updateUserName } from '../../actions/index';
// Components.
// import Input from '../../components/Input/Input';
// import Button from '../../components/DefaultButton/DefaultButton';
// Styles.
import './start.scss';

class Start extends React.Component {
  render() {

    const goToGame = () => {
      this.props.navigation.navigateTo('home');
    };

    return (
      <div className="bgimg w3-green w3-display-container w3-animate-opacity w3-text-white">
        <div className="w3-display-topleft w3-padding-large w3-xlarge">
          Logo
        </div>
        <div className="w3-display-middle">
          <h1 className="w3-jumbo w3-animate-top">{'Poker Planning'}</h1>
          <hr className="w3-border-grey hr-large" />
          <form className="w3-container w3-center" onSubmit={goToGame}>
            <p>
              <label className="w3-large">{'First, Enter you name:'}</label>
              <br />
              <input className="w3-input" type="text" defaultValue={this.props.userName} />
            </p>
            <button type="submit" className="w3-btn w3-border w3-text-white ">{' Press to begin! '}</button>
          </form>
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

Start.propTypes = {
  navigation: PropTypes.shape({
    navigateTo: PropTypes.func
  }),
  typing: PropTypes.shape({
    updateUserName: PropTypes.func
  }),
  userName: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
