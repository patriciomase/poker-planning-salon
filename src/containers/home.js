import React from 'react';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton/DefaultButton';

import { navigateAbout, navigateQuery } from '../actions/index';

import './home.scss';

class Home extends React.Component {
  
  goToGame() {
    this.props.navigation.navigateAbout();
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
      navigateAbout: () => dispatch(navigateAbout())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home);
