function getWhiteStars(num) {
  const whiteStar = '\u2606';
  const whiteStarsArray = [];

  let whiteStarsNum = 5 - num;
  for (let i = 1; i <= whiteStarsNum; i++) {
    whiteStarsArray.push(whiteStar);
  }
  return whiteStarsArray;
}

export default getWhiteStars;
