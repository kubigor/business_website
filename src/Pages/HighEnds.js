import React from 'react'
import HighendGallery from '../Sections/HighendGallery';
import HighendAddon from '../Sections/HighendAddon';
import './HighEnds.css'

const HighEnds = () => {
  return <div id="highend-container" >
      <HighendGallery id="first-section"/>
      <HighendAddon id="second-section"/>
    </div>
};

export default HighEnds;
