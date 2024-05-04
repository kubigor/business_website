import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import HighendGallery from '../sections/HighendGallery';
import HighendAddon from '../sections/HighendAddon';
import './HighEnds.css'

const HighEnds = () => {
  return <div id="highend-container" >
      <HighendGallery id="first-section"/>
      <HighendAddon id="second-section"/>
    </div>
};

export default HighEnds;
