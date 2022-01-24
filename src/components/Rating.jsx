import React from 'react';
import getWhiteStars from '../helpers/getWhiteStars';
import getBlackStars from '../helpers/getBlackStars';

// I refactored the code commented out with two functions, getWhiteStars and getBlackStars, to use it again in iteration 7

function Rating(props) {
  // const whiteStar = "\u2606";
  // const blackStar = "\u2605";
  // const blackStarsArray = [];
  // const whiteStarsArray = [];

  let num = Math.round(props.children);
  const whiteStars = getWhiteStars(num);
  const blackStars = getBlackStars(num);
  // if (num >= 1) {
  //     for (let i = 1; i <= num; i++) {
  //         blackStarsArray.push(blackStar)
  //     }
  // }

  // if (num < 5) {
  //     let whiteStarsNum = 5 - num;
  //     for (let i = 1; i <= whiteStarsNum; i++) {
  //         whiteStarsArray.push(whiteStar)
  //     }
  // }

  return (
    <div>
      <span>{blackStars}</span>
      <span>{whiteStars}</span>
      {/* <span>{blackStarsArray}</span>
           <span>{whiteStarsArray}</span> */}
    </div>
  );
}

export default Rating;
