import React from 'react';

const Hero = ({ title, children }) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="row">{children}</div>
    </div>
  );
};

export default Hero;
