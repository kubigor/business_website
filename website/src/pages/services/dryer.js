import React from 'react'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { dryerLD } from '../JSON-LD';
import dryer1 from '../../images/appliances/lg-dryer.webp'
import dryer2 from '../../images/appliances/whirlpool-dryer.webp'
import Charges from '../../sections/Charges';
import ServiceArea from '../../sections/ServiceArea';

import './Appliance.css'

const DryerRepair = () => {
  const updateJsonLdScript = () => {
    const scriptTag = document.getElementById('json-ld-script');
    const jsonLdString = JSON.stringify(dryerLD);
    if (scriptTag) {
      scriptTag.textContent = jsonLdString;
      console.log(scriptTag)
    }
  };

  React.useEffect(() => {
    updateJsonLdScript();
  }, []);

  return <div className="page-container">
      <script type="application/ld+json" id="json-ld-script"> 
      {JSON.stringify(dryerLD)}
      </script>
  <div className="appliance-container" >
  <div className="photos-container">
    <img loading="lazy" src={dryer1} alt="Dryer stacked in the laundry room"/>
    <img loading="lazy" src={dryer2} alt="Two dryers in the laundry room"/>
  </div>
  <div className="text-container">
    <h1>Dryer repair</h1>
    <p>
    The average lifespan of a clothes dryer is typically about 10 to 13 years. This duration can vary based on factors like the brand, model, usage habits, and maintenance. Regular cleaning of the lint filter and venting system, as well as prompt repairs of any issues, can help extend a dryer's life. Overloading and frequent use can contribute to a shorter lifespan. Generally, gas dryers may have a slightly longer lifespan compared to electric ones due to their different heating mechanisms.    </p>
    <p>
    At Major Appliance Repair, we do more than just fix appliances; we ensure your daily laundry routine is seamless and efficient. Entrust us with your dryer, and experience the Premier difference in quality and care. Call Major Appliance Repair for the dryer repair.
    </p>
    <div className="repairs">
      <h2>We will help you with:</h2>
      <p>Heating Element Repair or Replacement</p>
      <p>Gas Burner Repair and Ignition System Service</p>
      <p>Thermal Fuse Replacement</p>
      <p>Thermostat Repairs</p>
      <p>Drum Belt, Pulley, and Bearing Repairs</p>
      <p>Motor Repairs or Replacements</p>
      <p>Noise and Vibration Issues</p>
      <p>Vent Cleaning and Repair</p>
      <p>Door Latch and Seal Repairs</p>
      <p>Cleaning and Maintenance</p>
      <p>And anything else!</p>
    </div>
  </div>
  <div className="advice-container">
    <h2>What you can do before calling for service</h2>
    <div className="advices">
      <p>Check Power Supply</p>
      <p>Inspect the Door Switch</p>
      <p>Examine the Start Switch</p>
      <p>Check the Breaker</p>
      <p>Examine the Ventilation</p>
      <p>Listen for Unusual Noises</p>
      <p>Consult the User Manual</p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
  <div className="photos-container-mobile">
    <img loading="lazy" src={dryer1} alt="Dryer stacked in the laundry room"/>
    <img loading="lazy" src={dryer2} alt="Two dryers in the laundry room"/>
  </div>
</div>
<Charges />
<ServiceArea />
</div>
};

export default DryerRepair;
