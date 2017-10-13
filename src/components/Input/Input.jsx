import React from 'react';

import './input.scss';

const Input = ({ typeAction, value }) => {
  const handleChange = (event) => {
    typeAction(event.target.value);
  }

  return (
    <input
      className="input"
      onChange={handleChange}
      type="text"
      value={value}
    />
  );
}

export default Input;
