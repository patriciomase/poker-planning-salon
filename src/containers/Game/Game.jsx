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

    return (
      <div>
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
