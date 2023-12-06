import React, {useEffect} from 'react'
import HighendGallery from '../../Sections/HighendGallery';
import HighendAddon from '../../Sections/HighendAddon';
import './HighEnds.css'

const HighEnds = () => {
  // useEffect(() => {

  // }, []);

  return <div id="highend-container" >
      <HighendGallery id="first-section"/>
      <HighendAddon id="second-section"/>
    </div>
};

export default HighEnds;
