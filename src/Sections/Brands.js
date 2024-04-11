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
      <img loading="lazy" src={Whirlpool} alt="whirlpool logo" />
      <img loading="lazy" src={LG} alt="LG logo" />
      <img loading="lazy" src={SubZero} alt="SubZero logo" />
      <img loading="lazy" src={Samsung} alt="Samsung logo" />
    </div>
    <div class="row">
      <img loading="lazy" src={Viking} alt="Viking logo" />  
      <img loading="lazy" src={Maytag} alt="Maytag logo" />
      <img loading="lazy" src={Bosch} alt="Bosch logo" />
      <img loading="lazy" src={GE} alt="GE logo" />
    </div>
    <div class="row">
      <img loading="lazy" src={Frigidaire} alt="Frigidaire logo" />
      <img loading="lazy" src={Electrolux} alt="Electrolux logo" />
      <img loading="lazy" src={Dacor} alt="Dacor logo" />
      <img loading="lazy" src={Kenmore} alt="Kenmore logo" />
    </div>
    </div>
  </div>;
};

export default Brands;
