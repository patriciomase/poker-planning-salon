import React from 'react';

import './card.scss';

const Card = ({ value }) => {

  return (
    <div className="card">
      {value}
    </div>
  );
};

export default Card;
