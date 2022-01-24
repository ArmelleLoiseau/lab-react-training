import React from 'react';

function Random(props) {
    console.log(props)
    return (
        <p>Random value between {props.min} and {props.max} => {props.min + Math.floor(Math.random() * props.max)}</p>
    )
}

export default Random;
