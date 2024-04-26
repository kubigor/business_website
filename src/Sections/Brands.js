import React from "react";
import Bosch from "../Images/map/bosch-logo.webp"
import Frigidaire from "../Images/map/frigidaire-logo.webp"
import Kenmore from "../Images/map/kenmore-logo.webp"
import Viking from "../Images/map/viking-logo.webp"
import Dacor from "../Images/map/dacor-logo.webp"
import GE from "../Images/map/ge-logo.webp"
import Electrolux from "../Images/map/electrolux-logo.webp"
import LG from "../Images/map/lg-logo.webp"
import Samsung from "../Images/map/samsung-logo.webp"
import SubZero from "../Images/map/sub-zero-wolf-logos.webp"
import Maytag from "../Images/map/maytag-logo.webp"
import Whirlpool from "../Images/map/whirlpool-logo.webp"
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
