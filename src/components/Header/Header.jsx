import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './header.scss';
// Actions.
import { navigateTo, updateUserName } from '../../actions/index';


class Header extends React.Component {
  render() {
    const logOut = () => {
      this.props.navigation.navigateTo('');
    };
    const goHome = () => {
      this.props.navigation.navigateTo('home');
    };
    const toggleFunction = () => {
      var x = document.getElementById('navDemo');
      if (x.className.indexOf('w3-show') == -1) {
        x.className += ' w3-show';
      } else {
        x.className = x.className.replace(' w3-show', '');
      }
    };

    return (
      <div>
        <div className="w3-bar w3-green" id="myNavbar">
          <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onClick={toggleFunction} title="Toggle Navigation Menu">
            <span className="menu-icon">{'☰'}</span>
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hover-none">LOGO</a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small" onClick={goHome}>Home</a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small">About</a>
          <div className="w3-dropdown-hover w3-right w3-hide-small">
            <button className="w3-button">{this.props.userName}</button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4 ">
              <a onClick={logOut} className="w3-bar-item w3-button w3-topmost">Logout</a>
            </div>
          </div>
        </div>

        <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">

          <a href="#" className="w3-bar-item w3-button" onClick={goHome}>Home</a>
          <a href="#" className="w3-bar-item w3-button">About</a>
          <div className="w3-dropdown-hover">
            <button className="w3-button">{this.props.userName}</button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
              <a onClick={logOut} className="w3-bar-item w3-button w3-topmost">Logout</a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  navigation: {
    navigateTo: path => dispatch(navigateTo(path)),
  },
  typing: {
    updateUserName: userName => dispatch(updateUserName(userName)),
  },
});


const mapStateToProps = state => ({
  router: state.router,
  userName: state.userName || state.defaultUserName,
});

Header.propTypes = {
  userName: PropTypes.string,
  navigation: PropTypes.shape({
    navigateTo: PropTypes.func,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
