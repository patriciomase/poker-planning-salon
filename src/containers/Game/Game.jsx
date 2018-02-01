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
          <div className="w3-container w3-blue">
            <h5>Stories</h5>
          </div>
          <table className="w3-table-all">
            <thead>
              <tr>
                <th>#</th>
                <th>Story</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w3-hover-opacity w3-hover-blue" style={{ cursor: 'pointer' }}>
                <td className="w3-center">1</td>
                <td>Some really long ass description of the story</td>
                <td className="w3-center">-</td>
              </tr>
              <tr className="w3-hover-opacity w3-hover-blue" style={{ cursor: 'pointer' }}>
                <td className="w3-center">2</td>
                <td>A short description</td>
                <td className="w3-center">-</td>
              </tr>
              <tr className="w3-hover-opacity w3-hover-blue" style={{ cursor: 'pointer' }}>
                <td className="w3-center">2</td>
                <td>Another short description</td>
                <td className="w3-center">15</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w3-main" style={{ marginRight: '300px' }} >

          <Board switchSidebar={this.switchSidebar} />
        </div>
        <div className="w3-container">
          <h4>Participants</h4>
        </div>
        <div className="w3-container w3-border" style={{ height: '200px' }}>
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
