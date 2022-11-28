import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [buttonValue, setButtonValue] = useState(0);

  return (
    <button
      className="LikeButton"
      style={{ backgroundColor: colorArray[buttonValue % colorArray.length] }}
      onClick={() => {
        setButtonValue((currentValue) => currentValue + 1);
      }}
    >
      {buttonValue} Like{buttonValue === 1 ? '' : 's'}
    </button>
  );
};

export default LikeButton;
