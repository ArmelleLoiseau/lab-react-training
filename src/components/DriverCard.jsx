import React from 'react';
import getBlackStars from '../helpers/getBlackStars';
import getWhiteStars from '../helpers/getWhiteStars';
import './../styles/DriverCard.css';

function DriverCard(props) {
  let num = Math.round(props.rating);
  const whiteStars = getWhiteStars(num);
  const blackStars = getBlackStars(num);

  return (
    <div className="driver-card">
      <img className="driver-card-img" src={props.img} alt={props.name} />
      <div className="driver-card-text">
        <h4>{props.name}</h4>
        <div className="stars-box">
          <span>{blackStars}</span>
          <span>{whiteStars}</span>
        </div>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
