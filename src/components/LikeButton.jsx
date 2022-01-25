import React, { useState } from "react";
import getContrast from "./../helpers/getContrast"

// should start colored?

let backgroundColor;

function LikeButton() {
    const [like, setLike] = useState(0)

    const handleClik = (num) => {
        return () => {
            backgroundColor = color[Math.floor(Math.random() * color.length)]
            setLike(num + 1);
        } 
    }

    const color = ['purple','blue','green','yellow','orange','red']

    const btnStyle = {
        backgroundColor,
        color: getContrast(backgroundColor),
        padding: "5px",
        width: "100px",
        fontSize: "20px",
        borderRadius: "5px",
        marginBottom: "5px"
    }

    console.log(btnStyle)

    return (
        <div className="like-btn" >
            <button style={btnStyle} onClick={handleClik(like)}>{like} {like === 0 || like === 1 ? 'Like' : 'Likes'}</button>
        </div>
    )
}

export default LikeButton;