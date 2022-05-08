import React from 'react';
import './index.scss';

const Card = ({ children, style }) => {
  return (
    <div className='Card' style={style}>
      {children}
    </div>
  );
};

export default Card;
