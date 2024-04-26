import React from 'react'
import cooktop1 from '../../Images/appliances/thor-cooktop.webp'
import cooktop2 from '../../Images/appliances/whirlpool-cooktop.webp'
import Charges from '../../Sections/Charges';
import './Appliance.css'
import ServiceArea from '../../Sections/ServiceArea';

const CooktopRepair = () => {
  
  return <div class="page-container">
  <div class="appliance-container" >
  <div class="photos-container">
    <img loading="lazy" src={cooktop1} alt="Gas cooktop"/>
    <img loading="lazy" src={cooktop2} alt="Electrcic cooktop with ceramic glass"/>
  </div>
  <div class="text-container">
    <h1>Cooktop repair</h1>
    <p>
    The average lifespan of cooktops varies by type: electric cooktops typically last 13 to 15 years, gas cooktops about 15 years. Lifespan can be extended with regular maintenance and depends on factors like usage frequency, installation quality, and build quality.    </p>
    <p>
    At Major Appliance Repair, we're not just fixing appliances; we're restoring an essential part of your daily kitchen experience. Trust us to bring your cooktop back to its best with professionalism and care. Call Major Appliance Repair for the cooktop repair.    </p>
    <div class="repairs">
      <h2>We will help you with:</h2>
      <p>Burner Repair or Replacement</p>
      <p>Ignition Problems</p>
      <p>Element Replacement</p>
      <p>Gas Leak Repairs</p>
      <p>Control Panel and Switch Repairs</p>
      <p>Glass Top Repairs</p>
      <p>Wiring and Electrical Repairs</p>
      <p>Thermocouple Replacement</p>
      <p>Cleaning and Maintenance</p>
      <p>And anything else!</p>
    </div>
  </div>
  <div class="advice-container">
    <h2>What you can do before calling for service</h2>
    <div class="advices">
      <p>Check Power Supply</p>
      <p>Inspect Heating Elements</p>
      <p>Burner Inspection</p>
      <p>Check Gas Flow</p>
      <p>Inspect Cooking Surface</p>
      <p>Visual Inspection</p>
      <p>Consult the User Manual</p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
  <div class="photos-container-mobile">
    <img loading="lazy" src={cooktop1} alt="Gas cooktop"/>
    <img loading="lazy" src={cooktop2} alt="Electrcic cooktop with ceramic glass"/>
  </div>
</div>
<Charges />
<ServiceArea />
</div>
};

export default CooktopRepair;
