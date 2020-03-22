import React from 'react';

const Card = ({title, children}) => {
  return (
    <div className="card">
      <div className="card-head">
        <p className="card-title">{title}</p>
      </div>
      <div className="card-body">
        {children}
      </div>
      <div className="card-footer">
        <p>Footer Test</p>
      </div>
    </div>
  );
};

export default Card;

