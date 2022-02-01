import React, { useState } from 'react';

const Carousel = ({images}) => {

const [image, setImage] = useState(images[0])

const currentImg = images.find((img, idx) => img === image)
const currentImgIdx = images.indexOf(currentImg)

const handleLeftClick = () => {
    let prevImg = "";
    console.log(currentImgIdx);
    if (currentImgIdx === 0) {
        prevImg = images[images.length-1]   
    } else {
        prevImg = images[currentImgIdx-1]
    }
    setImage(prevImg)
}

const handleRightClick = () => {
    let nextImg = "";
    console.log(currentImgIdx);
    if (currentImgIdx === images.length -1) {
        nextImg = images[0]
    } else {
        nextImg = images[currentImgIdx+1]
    }
    setImage(nextImg)
}
  return <div>
      <button onClick={handleLeftClick}>Left</button>
      <img src={image} alt="" />
      <button onClick={handleRightClick}>Right</button>
  </div>;
};

export default Carousel;
