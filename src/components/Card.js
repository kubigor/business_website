import React from "react";
import "./Card.css"

const Card = ({name, text, image}) => {
  const Photo = require(`../Images/${image}.png`).default;
  return <div id="card-shape">
    <div id="card-text">{text}</div>
    <div id="card-name">{name}</div>
    <div id="card-image" img={Photo} width="400" height="400"></div>
  </div>
};
{/* style={{ background: url(${(props) => props.img}); }} */}
export default Card;
