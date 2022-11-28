import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const handleClickPosition = (event) => {
    // console.log(event);
    const rect = event.target.getBoundingClientRect();
    const xPercentPosition = ((event.clientX - rect.left) / rect.width) * 100; //x position within the element.
    // var y = event.clientY - rect.top; //y position within the element.
    // console.log(xPercentPosition);

    setImageIndex((currentIndex) => {
      let returnedIdex = currentIndex;
      if (xPercentPosition < 30) {
        returnedIdex += images.length - 1;
      } else if (xPercentPosition > 60) {
        returnedIdex++;
      }
      return returnedIdex % images.length;
    });
  };

  return (
    <div className="Carousel">
      <button
        onClick={() =>
          setImageIndex(
            (currentIndex) => (currentIndex - 1 + images.length) % images.length
          )
        }
      >
        Left
      </button>
      <picture onClick={handleClickPosition}>
        <img src={images[imageIndex]} alt="" />
      </picture>
      <button
        onClick={() =>
          setImageIndex((currentIndex) => (currentIndex + 1) % images.length)
        }
      >
        Right
      </button>
    </div>
  );
};

export default Carousel;
