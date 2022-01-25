import React from 'react';
import rgbToHex from '../helpers/rgbToHex';
import getContrast from '../helpers/getContrast';

// to-do : add some styling

function BoxColor(props) {
  const { r, g, b } = props;

  const color = `rgb(${r}, ${g}, ${b})`;

  const hexColor = rgbToHex(r, g, b);
  const fontColor = getContrast(r, g, b);

  const divStyle = {
    backgroundColor: color,
  };

  if (fontColor === 'white') divStyle.color = 'white';
  else divStyle.color = 'black';

  return (
    <div style={divStyle}>
      <p>{color}</p>
      <p>{hexColor}</p>
    </div>
  );
}

export default BoxColor;
