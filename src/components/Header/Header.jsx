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

    return (
      <div className="w3-bar w3-border w3-green">
        <a href="#" className="w3-bar-item w3-button w3-hover-none w3-padding-16">LOGO</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-16" onClick={goHome}>Home</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-16">About</a>
        <div className="w3-dropdown-hover w3-right">
          <button className="w3-button w3-padding-16">{this.props.userName}</button>
          <div className="w3-dropdown-content w3-bar-block w3-card-4">
            <a onClick={logOut} className="w3-bar-item w3-button w3-topmost">Logout</a>
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
