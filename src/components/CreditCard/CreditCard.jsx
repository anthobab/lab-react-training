import React from 'react';
import './CreditCard.css';
import visaImg from './../../assets/images/visa.png';
import mcImg from './../../assets/images/Mastercard_2019_logo.svg';
// import { ReactComponent as mcImg } from './../../assets/images/master-card.svg';
// const scale = Window.devicePixelRatio();
const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const divStyle = {
    background: bgColor,
    color: color,
  };

  const cbImg = {
    Visa: visaImg,
    'Master Card': mcImg,
  };

  const last4Digits = number.slice(-4);

  const maskedNumber = last4Digits.padStart(number.length, '•');
  const regex = /.{1, 4}/g;
  //   console.log(maskedNumber.match(regex).join(' '));

  //   console.log(scale);
  return (
    <div className="CreditCard" style={divStyle}>
      <picture>
        <img src={cbImg[type]} alt={type} />
      </picture>
      {/* <p>pixel ratio : {scale}</p> */}
      <div className="CardNumber">
        {maskedNumber.slice(0, 4)} {maskedNumber.slice(4, 8)}{' '}
        {maskedNumber.slice(8, 12)} {maskedNumber.slice(12, 16)}
      </div>
      <div>
        <p>
          Expires {('0' + expirationMonth).slice(-2)}/
          {expirationYear.toString().slice(2, 4)}
          <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
