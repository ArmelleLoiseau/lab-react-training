import React, { useState } from 'react';

const NumbersTable = ({ limit }) => {
  let tableCells = [];

  for (let i = 1; i <= limit; i++) {
    tableCells.push(i);
  }

  const divStyleEven = {
    border: '1px solid black',
    width: '120px',
    height: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  };

  const divStyleOdd = {
    border: '1px solid black',
    width: '120px',
    height: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  };
  //   for (let cell in tableCells) {
  //     console.log(cell);
  //     if (cell % 2 === 0) divStyle.backgroundColor = 'red';
  //     else divStyle.backgroundColor = 'white';
  //   }

  return (
    <div
      className="table"
      style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
    >
      {tableCells.map((cell) => {
        return cell % 2 === 0 ? (
          <div style={divStyleEven} key={cell}>
            {cell}
          </div>
        ) : (
          <div style={divStyleOdd} key={cell}>
            {cell}
          </div>
        );
      })}
      ;
    </div>
  );
};

export default NumbersTable;
