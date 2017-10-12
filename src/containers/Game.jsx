import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'redux-little-router';

import './game.scss';

// Actions.
import {
  createRoom
} from '../actions/socket';

// Components.
import TicketName from '../components/TicketName/TicketName';

class Game extends Component {
  componentDidMount() {
    this.props.socket.createRoom(
      this.props.router.params.id,
      this.props.userName
    );
  }
  
  render() {
    const { users } = this.props;
    const userList = users.map(user => (
      <div className="game-user" key={user.id}>
        <img src="https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/18057645_10211905023837405_2513766658459686163_n.jpg?oh=4a2f6aca2b59d76fe7b4732e08cea6b5&oe=59DEB9B5" />
        <span className="game-user-name">
          {user.name}
        </span>
      </div>
    ));

    return (
      <div className="game">
        <TicketName {...this.props.currentTicket} />
        {userList}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    socket: {
      createRoom: (id, userName) => dispatch(createRoom(id, userName))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    router: state.router,
    currentTicketName: state.currentTicket,
    users: state.users,
    userName: state.userName
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
