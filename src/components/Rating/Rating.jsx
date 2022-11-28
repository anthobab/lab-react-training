import React from 'react';
import './Rating.css';

const Rating = ({ children }) => {
  const value = Math.round(Number(children));
  const maxValue = 5;

  return (
    <div className="Rating">{'★'.repeat(value).padEnd(maxValue, '☆')}</div>
  );
};

export default Rating;
