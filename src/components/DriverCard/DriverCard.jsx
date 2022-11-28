import React from 'react';
import Rating from '../Rating/Rating';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="DriverCard">
      <picture>
        <img src={img} alt="profileDriver" />
      </picture>
      <div className="DriverCardinfo">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
