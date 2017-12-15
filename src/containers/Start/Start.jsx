import React from 'react';
import { connect } from 'react-redux';

// Actions.
import { navigateTo, updateUserName } from '../../actions/index';
// Components.
import Input from '../../components/Input/Input';
import Button from '../../components/DefaultButton/DefaultButton';
// Styles.
import './start.scss';

class Home extends React.Component {

  goToGame() {
    this.props.navigation.navigateTo(`game/${Date.now()}`);
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
