import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions.
import {
  addUser
} from '../actions/socket';

class SocketManager extends Component {
  
  handleAddUser() {
    this.props.socket.addUser({
      id: Date.now(),
      name: `user ${Date.now()}`
    });
  }
  
  render() {
    return (
      <div style={{ position: 'fixed', bottom: 0 }}>
        <button onClick={this.handleAddUser.bind(this)}>Test Add User</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    socket: {
      addUser: (user) => dispatch(addUser(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(SocketManager);
