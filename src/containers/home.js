import React from 'react';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton/DefaultButton';

import { navigateTo, navigateQuery } from '../actions/index';

import './home.scss';

class Home extends React.Component {
  
  goToGame() {
    this.props.navigation.navigateTo('game');
  }
  
  render() {
    return (
      <div className="home">
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

const mapDispatchToProps = (dispatch) => {
  return {
    navigation: {
      navigateTo: (path) => dispatch(navigateTo(path))
    }
  }
}

export default connect(null, mapDispatchToProps)(Home);
