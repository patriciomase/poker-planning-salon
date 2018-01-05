import React, { Component } from 'react';
import { connect } from 'react-redux';

import './game.scss';

// import Card from '../../components/Card/Card';

// Actions.
import {
  createRoom
} from '../../actions/socket';

// Components.
// import TicketName from '../../components/TicketName/TicketName';

class Game extends Component {
  componentDidMount() {
    this.props.socket.createRoom(
      this.props.router.params.id,
      this.props.userName
    );
  }

  render() {
    // const { users } = this.props;

    const sidebarOpen = () => {
      document.getElementById('main').style.marginLeft = '200px';
      document.getElementById('mySidebar').style.width = '200px';
      document.getElementById('mySidebar').style.display = 'block';
    };

    const sidebarClose = () => {
      document.getElementById('mySidebar').style.display = 'none';
    };

    return (
      <div>
        <div className="w3-sidebar w3-bar-block w3-collapse w3-card sidebar" id="mySidebar">
          <button className="w3-bar-item w3-button w3-hide-large" onClick={sidebarClose}>
            Close &times;
          </button>
          <a href="#" className="w3-bar-item w3-button">Link 1</a>
          <a href="#" className="w3-bar-item w3-button">Link 2</a>
          <a href="#" className="w3-bar-item w3-button">Link 3</a>
        </div>

        <div className="w3-main content" id="main">

          <div className="w3-teal">
            <button className="w3-button w3-teal w3-xlarge w3-right" onClick={sidebarOpen}>&#9776;</button>
            <h1>My Page</h1>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    socket: {
      createRoom: (id, userName) => dispatch(createRoom(id, userName))
    }
  };
};

const mapStateToProps = (state) => {
  return {
    router: state.router,
    currentTicketName: state.currentTicket,
    users: state.users,
    userName: state.userName
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
