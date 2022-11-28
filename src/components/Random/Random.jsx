import React from 'react';
import './Random.css';

const Random = ({ min, max }) => {
  return (
    <div className="Random">
      {`Random value between ${min} and ${max} => ${
        Math.floor(Math.random() * (max - min)) + min
      }`}
    </div>
  );
};

export default Random;
