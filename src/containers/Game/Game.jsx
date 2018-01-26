import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board/Board';
import './game.scss';

// Actions.
import {
  createRoom
} from '../../actions/socket';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expandedSidebar: false
    };
  }

  switchSidebar = () => {
    this.setState({
      expandedSidebar: !this.state.expandedSidebar
    });
  }

  render() {
    const expandedSidebarStyle = this.state.expandedSidebar ? 'block' : 'none';
    console.log(expandedSidebarStyle);
    return (
      <div>
        <div className="w3-sidebar w3-bar-block w3-collapse w3-card"
          style={{ width: '300px', display: expandedSidebarStyle, right: 0 }}>
          <button className="w3-bar-item w3-button w3-hide-large" onClick={this.switchSidebar}>
            Close &times;
          </button>
          <a href="#" className="w3-bar-item w3-button">Story 1</a>
          <a href="#" className="w3-bar-item w3-button">Story 2</a>
          <a href="#" className="w3-bar-item w3-button">Story 3</a>
        </div>

        <div className="w3-main" style={{ marginRight: '300px' }} >
       
          <Board switchSidebar={ this.switchSidebar  }/>
        </div>
        <div className="w3-container w3-blue" style={{height: '300px'}}>
          Users 
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
