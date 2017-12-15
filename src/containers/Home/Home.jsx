import React from 'react';
import { connect } from 'react-redux';

// Components.
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import Input from '../../components/Input/Input';

import {
  navigateTo,
  updateUserName
} from '../../actions/index';

import './home.scss';

class Home extends React.Component {
  
  goToGame() {
    this.props.navigation.navigateTo(`game/${Date.now()}`);
  }
  
  render() {
    return (
      <div className="home">
        <div className="home-realName">
          {'Probably your actual name is not'} <b>{this.props.userName}</b>{','}<br/>
          {' tell us your real name if you want:'}
          <Input
            typeAction={this.props.typing.updateUserName}
            value={this.props.userName}
          />
        </div>
        <DefaultButton onClick={this.goToGame.bind(this)}>
          {'Create a new game'}
        </DefaultButton>
        {'or'}
        <DefaultButton>
          {'Join an existent one'}
        </DefaultButton>
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
