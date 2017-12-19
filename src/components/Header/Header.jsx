import React from 'react';
import { connect } from 'react-redux';

import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../../images/title.png';

class Header extends React.Component {
  render() {
    return (
        <Navbar default collapseOnSelect fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <img src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavDropdown eventKey={3} title={this.props.userName} id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>{'Log Out'}</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    router: state.router,
    userName: state.userName || state.defaultUserName
  };
};

export default connect(mapStateToProps)(Header);