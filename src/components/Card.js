import React from "react";
import data from "../Sections/ReviewsData"
import stars from "../Images/five-stars-rating.webp"
import Yelp from "../Images/yelp-logo.webp"
import Google from "../Images/googlemaps-icon.webp"
import "./Card.css"

const Card = ({ index }) => {
  const cardData = data[index];
  let logoSource = null;
  if (cardData.source === "Yelp") {
    logoSource = Yelp
  } else if (cardData.source === "Google") {
    logoSource = Google
  }
  let photo = `https://majorappliancerepair.info${cardData.avatar}`

  return <div id="card-container">
      <a id="card-link" href={data[index].link} target="_blank" rel="noreferrer"><div id="card-header">
        <img loading="lazy" id="source-logo" src={logoSource} alt="Source of review (Yelp or Google)"/>
        <img loading="lazy" id="card-avatar" src={photo} alt="Customer avatar"/>
        <h2 id="card-name">{data[index].name}</h2>
        <img loading="lazy" id="five-star" src={stars} alt="Five stars"/>
      </div>
      </a>
      <p id="card-message">{data[index].message}</p>
    </div>

};

export default Card;
