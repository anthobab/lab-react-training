import React from 'react';
import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
  const colorValue =
    r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white';
  const divStyle = {
    background: `rgb(${r}, ${g}, ${b})`,
  };
  const pstyle = {
    color: colorValue,
  };
  // console.log(colorValue);
  function toHex(numb) {
    return numb.toString(16).length === 1
      ? numb.toString(16) + numb.toString(16)
      : numb.toString(16);
  }

  return (
    <div className="BoxColor" style={divStyle}>
      {/* <style> .BoxColor {`{background: rgb(${r}, ${g}, ${b})}`}</style> */}
      <p style={pstyle}>{`rgb(${r},${g},${b})`}</p>
      <p style={{ color: colorValue }}>{`#${toHex(r)}${toHex(g)}${toHex(
        b
      )}`}</p>
    </div>
  );
};

export default BoxColor;
