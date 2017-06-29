import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'redux-little-router';

import './game.scss';

const Game = ({ users }) => {
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
      {userList}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(Game);
