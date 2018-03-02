import React from 'react';
import PropTypes from 'prop-types';

const HeaderButton = ({ clickAction }) => {
  const handleLogout = () => {
    clickAction('');
  };

  return (
    <a
      className={'w3-bar-item w3-button w3-topmost'}
      onClick={handleLogout}
    >
      {'Logout'}
    </a>
  );
};

HeaderButton.propTypes = {
  clickAction: PropTypes.func
};

export default HeaderButton;
