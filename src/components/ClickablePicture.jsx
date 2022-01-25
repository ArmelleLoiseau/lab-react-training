import React, { useState } from "react"

function ClickablePicture({ image, imgClicked}) {
    console.log(image)
    console.log(imgClicked)

    return (
        <div>
        <img src={image} alt="Maxence" />
        </div>
    )
}

export default ClickablePicture