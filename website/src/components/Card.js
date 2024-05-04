import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo" ;
import data from "../sections/ReviewsData"
import stars from "../images/five-stars-rating.webp"
import Yelp from "../images/yelp-logo.webp"
import Google from "../images/googlemaps-icon.webp"
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
      <a id="card-link" href={data[index].link} target="_blank" rel="noreferrer"><div id="card-header">
        <img loading="lazy" id="source-logo" src={logoSource} alt="Customer source: Yelp or Google"/>
        <img loading="lazy" id="card-avatar" src={data[index].avatar} alt="Customer avatar"/>
        <h2 id="card-name">{data[index].name}</h2>
        <img loading="lazy" id="five-star" src={stars} alt="Five star rating"/>
      </div>
      </a>
      <p id="card-message">{data[index].message}</p>
    </div>

};

export default Card;
