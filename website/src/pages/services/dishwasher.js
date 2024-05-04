import React from 'react'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { dishwasherLD } from '../JSON-LD';
import dishwasher1 from '../../images/appliances/thor-dishwasher.webp'
import dishwasher2 from '../../images/appliances/bosch-dishwasher.webp'
import Charges from '../../sections/Charges';
import './Appliance.css'
import ServiceArea from '../../sections/ServiceArea';

const DishwasherRepair = () => {
  const updateJsonLdScript = () => {
    const scriptTag = document.getElementById('json-ld-script');
    const jsonLdString = JSON.stringify(dishwasherLD);
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
      {JSON.stringify(dishwasherLD)}
      </script>
    <div className="appliance-container" >
    <div className="photos-container">
      <img loading="lazy" src={dishwasher1} alt="Dishwasher in the kitchen"/>
      <img loading="lazy" src={dishwasher2} alt="Dishwasher range in the kitchen"/>
    </div>
    <div className="text-container">
      <h1>Dishwasher repair</h1>
      <p>
      The average lifespan of a dishwasher is typically around 9 to 12 years, depending on the brand, model, and how well it is maintained. Regular cleaning and maintenance, such as cleaning filters and ensuring proper loading, can help extend its life. Factors such as the frequency of use, the hardness of water, and the quality of detergent used can also impact the longevity of a dishwasher. High-end models might last longer due to better build quality and features that reduce wear and tear.
      </p>
      <p>
      At Major Appliance Repair, we're committed to restoring the convenience and efficiency your dishwasher provides. Let us take care of your appliance with our expertise and dedication. Call Major Appliance Repair for the dishwasher repair.
      </p>
      <div className="repairs">
        <h2>We will help you with:</h2>
        <p>Pump and Motor Repairs</p>
        <p>Water Inlet Valve Replacement</p>
        <p>Spray Arm Repairs</p>
        <p>Heating Element Replacement</p>
        <p>Drainage Issues</p>
        <p>Door Latch and Seal Repairs</p>
        <p>Control Panel and Electronic Repairs</p>
        <p>Detergent Dispenser Repairs</p>
        <p>Rack and Basket Replacements</p>
        <p>Cleaning and Maintenance</p>
        <p>And anything else!</p>
      </div>
    </div>
    <div className="advice-container">
      <h2>What you can do before calling for service</h2>
      <div className="advices">
        <p>Check Power Supply</p>
        <p>Inspect the Control Panel</p>
        <p>Inspect Door Latch</p>
        <p>Check Water Supply</p>
        <p>Inspect Drainage Issues</p>
        <p>Inspect Spray Arms</p>
        <p>Assess Detergent Dispenser</p>
        <p>Listen for Unusual Noises</p>
        <p>Consult the User Manual</p>
        <p></p>
      </div>
    </div>
    <div className="photos-container-mobile">
      <img loading="lazy" src={dishwasher1} alt="Dishwasher in the kitchen"/>
      <img loading="lazy" src={dishwasher2} alt="Dishwasher range in the kitchen"/>
    </div>
  </div>
  <Charges />
  <ServiceArea />
  </div>
}
export default DishwasherRepair;
