import React from 'react';

import './card.scss';

const Card = ({ value, text, clickAction }) => {

  const centerClassName = text ? 'center-text' : 'center-number';

  return (
    <button className="card" onClick={clickAction}>
      <div className="left-number">{value}</div>
      <div className={centerClassName}>{text || value}</div>
      <div className="right-number">{value}</div>
    </button>
  );
};

export default Card;
