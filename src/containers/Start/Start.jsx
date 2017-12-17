import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions.
import { navigateTo, updateUserName } from '../../actions/index';
// Components.
import Input from '../../components/Input/Input';
import Button from '../../components/DefaultButton/DefaultButton';
// Styles.
import './start.scss';

class Start extends React.Component {

  goToGame() {
    this.props.navigation.navigateTo('home');
  }

  render() {
    return (
      <div className="container">
        <header>
          <img src="../../images/title.png" alt="poker planning" />
          <div className="subtitle">{'SALOON'}</div>
        </header>
        <main>
          <br /><br />
          <div>{'First, tell us your name:'}</div>
          <Input
            typeAction={this.props.typing.updateUserName}
            value={this.props.userName}
          />
          <br /><br />
          <Button onClick={this.goToGame.bind(this)}>
            {'Start'}
          </Button>
        </main>
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
