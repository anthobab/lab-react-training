import React from 'react';
import './Greetings.css';

const multilangGreet = {
  en: 'Hello',
  es: 'Hola',
  de: 'Hallo',
  fr: 'Bonjour',
};

const Greetings = ({ children, lang }) => {
  return (
    <div className="Greetings">
      {multilangGreet[lang]} {children}
    </div>
  );
};

export default Greetings;
