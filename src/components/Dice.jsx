import React, { useState } from 'react';

const allDices = [
  '/dice1.png',
  '/dice2.png',
  '/dice3.png',
  '/dice4.png',
  '/dice5.png',
  '/dice6.png',
];

const emptyDice = '/dice-empty.png';

function Dice() {
  let randomDice = allDices[Math.floor(Math.random() * allDices.length)];
  const [dice, setDice] = useState(randomDice);

  const handleClick = () => {
    setDice(emptyDice);
    setTimeout(() => {
      setDice(randomDice);
    }, 1000);
  };

  return (
    <>
      <img
        style={{ width: '200px' }}
        onClick={handleClick}
        src={dice}
        alt="dice"
      />
    </>
  );
}

export default Dice;
