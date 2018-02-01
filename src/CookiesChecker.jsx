import React from 'react';

// Libraries.
import giveMeName from './libraries/names.js';
const person = giveMeName();

class CookiesChecker extends React.Component {
  componentWillMount() {
    // Before mounting check for cookie.
    let userName = this.getCookie();

    if (!userName) {
      userName = giveMeName().name;
    }

    this.props.updateUserName(userName);
  }

  getCookie() {
    var value = ';' + document.cookie;
    var parts = value.split('; ' + this.props.cookieName + '=');
    console.log('cookie', parts);
    if (parts.length < 2) {
      return null;
    }
    return parts.pop().split(';').shift();
  }

  render() {
    return this.props.render();
  }
}

export default CookiesChecker;
