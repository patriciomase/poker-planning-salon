import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './header.scss';
// Actions.
import { navigateTo, updateUserName } from '../../actions/index';

import logo from '../../images/title.png';  

class Header extends React.Component {
  render() {
    const goHome = () => {
      this.props.navigation.navigateTo('');
    };

    return (
        <div className="navbar">
        <img src={logo} />
        <div className="dropdown">
          <button className="dropbtn">{ this.props.userName }</button>
          <div className="dropdown-content">
            <a onClick={ goHome }>{'Log out'}</a>
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
