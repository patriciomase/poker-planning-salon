import React from 'react';

import './defaultButton.scss';

const DefaultButton = ({ children, onClick = () => {} }) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <button
      className="DefaultButton"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default DefaultButton;
