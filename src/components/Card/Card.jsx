import React from 'react';

import './card.scss';

const Card = ({ clickAction, value }) => {
  const handleClick = () => clickAction(value);

  return (
    <div className="card">
      {value}
    </div>
  );
}

export default Card;
