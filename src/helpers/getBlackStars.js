function getBlackStars(num) {
  const blackStar = '\u2605';
  const blackStarsArray = [];
  if (num >= 1) {
    for (let i = 1; i <= num; i++) {
      blackStarsArray.push(blackStar);
    }
  }
  return blackStarsArray;
}

export default getBlackStars;
