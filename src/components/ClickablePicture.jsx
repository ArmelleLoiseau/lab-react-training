import React, { useState } from 'react';

function ClickablePicture({ image, imgClicked }) {
  const [pic, setPic] = useState(image);

  const changeImage = () => {
    pic === image ? setPic(imgClicked) : setPic(image);
  };

  return (
    <div>
      <img onClick={changeImage} src={pic} alt="Maxence" />
    </div>
  );
}

export default ClickablePicture;
