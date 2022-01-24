// change font color based on luminance // source : https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
function setContrast(r, g, b) {
  // http://www.w3.org/TR/AERT#color-contrast
  const brightness = Math.round(
    (parseInt(r) * 299 + parseInt(g) * 587 + parseInt(b) * 114) / 1000
  );
  const textColour = brightness > 125 ? 'black' : 'white';
  return textColour;
}

export default setContrast;
