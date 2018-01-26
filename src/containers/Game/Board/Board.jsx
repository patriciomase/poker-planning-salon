import React, { Component } from 'react';
import { connect } from 'react-redux';

class Board extends Component {

  render() {

    return (
      <div className="w3-row">
        <div className="w3-col l2 m3 s12 w3-dark-grey w3-center" style={{ height: '102px' }}>
          <p>POINTS</p>
          <h4>15</h4>
        </div>

        <div className="w3-col l10 m9 s12">
          <div className="w3-container w3-center" style={{height: '64px'}}>
            <h4>Task #### - Here it should be the title</h4>
          </div>

          <div className="w3-row w3-green">
          <button className="w3-button w3-teal">Previous</button>
          <button className="w3-button w3-teal">Next</button>
            <button className="w3-button w3-teal w3-right w3-hide-large" onClick={this.props.switchSidebar}>Stories</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
