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

    const openCity = (evt, cityName) => {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName('tabcontent');
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName('tablinks');
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = 'block';
      evt.currentTarget.className += ' active';
    };

    return (
      <div>
        <side className="content">
          <div className="averageDisplay" />
          <div className="tab">
            <button className="tablinks">London</button>
            <button className="tablinks">Paris</button>
            <button className="tablinks" onClick={openCity(event, 'Tokyo')}>Tokyo</button>
            <div id="London" className="tabcontent">
              <h3>London</h3>
              <p>London is the capital city of England.</p>
            </div>

            <div id="Paris" className="tabcontent">
              <h3>Paris</h3>
              <p>Paris is the capital of France.</p>
            </div>

            <div id="Tokyo" className="tabcontent">
              <h3>Tokyo</h3>
              <p>Tokyo is the capital of Japan.</p>
            </div>
          </div>
        </side>
        <article className="sidebar" />
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
