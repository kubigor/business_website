import React from 'react'
import photo from '../../Images/places/seattle.webp'
import './City.css'

const Seattle = () => {
  
  return <div className="page-container">
    <div className="city-photo-container">
      <img loading="lazy" className="city-photo" src={photo} alt="Bellevue skyline"/>
      <div classNameName="overlay"></div>
    </div>
  </div>
};

export default Seattle;
