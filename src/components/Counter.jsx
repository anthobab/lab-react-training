import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="Counter">
      <p>{counter}</p>
      <button onClick={() => setCounter((value) => value + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((value) => value - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
