import React, { useState } from 'react';
import './ClickablePicture.css';

const ClickablePicture = () => {
  const [glassesOn, setGlassesOn] = useState(false);

  const toglleglasses = () => {
    setGlassesOn((curstate) => !curstate);
  };

  return (
    <picture className="ClickablePicture" onClick={toglleglasses}>
      <img src={glassesOn ? 'maxence-glasses.png' : 'maxence.png'} alt="" />
    </picture>
  );
};

export default ClickablePicture;
