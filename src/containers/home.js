import React from 'react';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton/DefaultButton';

import { navigateTo, navigateQuery } from '../actions/index';

import './home.scss';

class Home extends React.Component {
  
  goToGame() {
    this.props.navigation.navigateTo(`game/${Date.now()}`);
  }
  
  render() {
    return (
      <div className="home">
        <div className="home-realName">
          Probably your actual name is not {this.props.userName},<br />
          tell us your real name if you want: 
        </div>
        <DefaultButton onClick={this.goToGame.bind(this)}>
          Create a new game
        </DefaultButton>
        or
        <DefaultButton>
          Join an existent one
        </DefaultButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigation: {
      navigateTo: (path) => dispatch(navigateTo(path))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
