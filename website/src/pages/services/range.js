import React from 'react'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { rangeLD } from '../JSON-LD';
import range1 from '../../images/appliances/thor-range.webp'
import range2 from '../../images/appliances/bosch-range.webp'
import Charges from '../../sections/Charges';
import './Appliance.css'
import ServiceArea from '../../sections/ServiceArea';

const RangeRepair = () => {
  const updateJsonLdScript = () => {
    const scriptTag = document.getElementById('json-ld-script');
    const jsonLdString = JSON.stringify(rangeLD);
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
      {JSON.stringify(rangeLD)}
      </script>
  <div className="appliance-container" >
  <div className="photos-container">
    <img loading="lazy" src={range1} alt="Free standing range in the kitchen"/>
    <img loading="lazy" src={range2} alt="Free standing range in the kitchen"/>
  </div>
  <div className="text-container">
    <h1>Range and Oven repair</h1>
    <p>
    The average lifespan of a kitchen range, which includes both the stove and the oven, is typically around 13 to 15 years. This lifespan can vary depending on the type (electric or gas), the brand, the quality of the appliance, and how well it's maintained. Regular cleaning and timely repairs can extend the life of a range, while frequent heavy use and neglect can shorten it. Electric ranges tend to have a slightly longer lifespan compared to gas ranges due to their fewer mechanical parts and simpler operation.    
    </p>
    <p>
    At Major Appliance Repair, we're not just fixing appliances; we're restoring the heart of your kitchen. Our commitment to excellence and attention to detail ensures that your range and oven are in the best hands. Call Major Appliance Repair for the range repair and oven repair.
    </p>
    <div className="repairs">
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
  <div className="advice-container">
    <h2>What you can do before calling for service</h2>
    <div className="advices">
      <p>Check Power Supply</p>
      <p>Inspect the Control Panel</p>
      <p>Examine the Door</p>
      <p>Check for Obvious Damage</p>
      <p>Heating Elements Check</p>
      <p>Gas Supply Check</p>
      <p>Igniter and Burner Inspection</p>
      <p>Check the Oven Burner</p>
      <p>Consult the User Manual</p>
      <p></p>
    </div>
  </div>
  <div className="photos-container-mobile">
    <img loading="lazy" src={range1} alt="Free standing range in the kitchen"/>
    <img loading="lazy" src={range2} alt="Free standing range in the kitchen"/>
  </div>
</div>
<Charges />
<ServiceArea />
</div>
}
export default RangeRepair;
