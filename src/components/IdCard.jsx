import React from 'react';

// to do : function to display height properly + some css

function IdCard(props) {
  let date = props.birth.toDateString();
  return (
    <div className="IdCard">
      <img src={props.picture} alt={props.name} />
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}m</p>
      <p>Birth: {date}</p>
    </div>
  );
}

export default IdCard;
