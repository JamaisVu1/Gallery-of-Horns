import React from "react";

function HornedBeast(props) {
    return (
        <li>   
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.title} />
            <p>{props.description}</p>
        </li>
    )
}

export default HornedBeast;