import React from 'react'
import photo from '../../Images/places/seattle.webp'
import './City.css'

const Seattle = () => {
  
  return <div class="page-container">
    <div class="city-photo-container">
      <img loading="lazy" class="city-photo" src={photo} alt="Bellevue skyline"/>
      <div className="overlay"></div>
    </div>
  </div>
};

export default Seattle;
