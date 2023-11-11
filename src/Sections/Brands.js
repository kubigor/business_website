import React from "react";
import Bosch from "../Images/map/bosch-logo.png"
import Frigidaire from "../Images/map/frigidaire-logo.png"
import Kenmore from "../Images/map/kenmore-logo.png"
import Viking from "../Images/map/viking-logo.png"
import Dacor from "../Images/map/dacor-logo.png"
import GE from "../Images/map/ge-logo.png"
import Electrolux from "../Images/map/electrolux-logo.png"
import LG from "../Images/map/lg-logo.png"
import Samsung from "../Images/map/samsung-logo.png"
import SubZero from "../Images/map/sub-zero-wolf-logos.webp"
import Maytag from "../Images/map/maytag-logo.png"
import Whirlpool from "../Images/map/whirlpool-logo.png"
import "./Brands.css"

const Brands = () => {
  return <div id="map-container">
    <div id="rows">
    <div class="row">
      <img src={Whirlpool} alt="whirlpool logo" />
      <img src={LG} alt="LG logo" />
      <img src={SubZero} alt="SubZero logo" />
      <img src={Samsung} alt="Samsung logo" />
    </div>
    <div class="row">
      <img src={Viking} alt="Viking logo" />  
      <img src={Maytag} alt="Maytag logo" />
      <img src={Bosch} alt="Bosch logo" />
      <img src={GE} alt="GE logo" />
    </div>
    <div class="row">
      <img src={Frigidaire} alt="Frigidaire logo" />
      <img src={Electrolux} alt="Electrolux logo" />
      <img src={Dacor} alt="Dacor logo" />
      <img src={Kenmore} alt="Kenmore logo" />
    </div>
    </div>
  </div>;
};

export default Brands;
