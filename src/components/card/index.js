import React from 'react';
import './styles.css';

const Card = ({ title = '', avatar, background = {}, children }) => {
  const img = avatar ? { ...avatar } : {};
  return (
    <div className="cardWrapper" style={background}>
      <div style={avatar} />
      <h1>{ title }</h1>
      <div>
        { children }
      </div>
    </div>
  );
};

export default Card;
