import React from 'react';
import { connect } from 'react-redux';

// Components.
import Card from '../../components/Card/Card';
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
      <div className="home">
        <Card className="card" text="New Room" value={1} clickAction={goToGame} />
        <span className="card-separator">{'or'}</span>
        <Card className="card" value={2} text="Join Room" clickAction={() => { }} />
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
