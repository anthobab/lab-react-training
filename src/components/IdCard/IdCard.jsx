import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  return (
    <div className="IdCard">
      <picture>
        <img src={props.picture} alt="ID of" />
      </picture>
      <ul>
        <li>
          <span>First name: </span>
          {props.firstName}
        </li>
        <li>
          <span>Last name: </span>
          {props.lastName}
        </li>
        <li>
          <span>Gender: </span>
          {props.gender}
        </li>
        <li>
          <span>Height: </span>
          {props.height / 100}m
        </li>
        <li>
          <span>Birth: </span>
          {String(
            Intl.DateTimeFormat('local', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }).format(props.birth)
          ).replace(/,/g, '')}
        </li>
      </ul>

      {/* lastName=props.lastname
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg" */}
    </div>
  );
};

export default IdCard;
