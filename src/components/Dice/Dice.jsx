import React, { useState } from 'react';
import './Dice.css';
import diceEmpty from './../../assets/images/dice-empty.png';
// require.context('./../../assets/images/', false, /\.png$/)

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[index] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('./../../assets/images/', false, /dice\d+\.(png|jpe?g|svg)$/)
);

// console.log(images[Math.floor(Math.random() * Object.keys(images).length)]);

// console.log(images);
const Dice = () => {
  function randomDiceImg() {
    return images[Math.floor(Math.random() * Object.keys(images).length)];
  }
  const [diceImg, setDiceImg] = useState(randomDiceImg());

  const handleImage = () => {
    setDiceImg(() => diceEmpty);
    setTimeout(() => {
      setDiceImg(randomDiceImg());
    }, 1000);
  };

  return (
    <picture onClick={handleImage} className="Dice">
      <img src={diceImg} alt="" />
    </picture>
  );
};

export default Dice;
