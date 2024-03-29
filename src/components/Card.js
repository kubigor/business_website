import React from "react";
import data from "../Sections/ReviewsData"
import stars from "../Images/five-stars-rating.png"
import Yelp from "../Images/yelp-logo.png"
import Google from "../Images/googlemaps-icon.png"
import "./Card.css"

const Card = ({ index }) => {
  const cardData = data[index];
  let logoSource = null;
  if (cardData.source === "Yelp") {
    logoSource = Yelp
  } else if (cardData.source === "Google") {
    logoSource = Google
  }

  return <div id="card-container">
      <a id="card-link" href={data[index].link} target="_blank"><div id="card-header">
        <img id="source-logo" src={logoSource}/>
        <img id="card-avatar" src={data[index].avatar}/>
        <h2 id="card-name">{data[index].name}</h2>
        <img id="five-star" src={stars}/>
      </div>
      </a>
      <p id="card-message">{data[index].message}</p>
    </div>

};

export default Card;
