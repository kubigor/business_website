import React from 'react'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { refrigeratorLD } from '../JSON-LD';
import fridge1 from '../../images/appliances/whirlpool-refrigerator.webp'
import fridge2 from '../../images/appliances/sub-zero-refrigerator.webp'
import Charges from '../../sections/Charges';
import './Appliance.css'
import ServiceArea from '../../sections/ServiceArea';

const RefrigeratorRepair = () => {
  const updateJsonLdScript = () => {
    const scriptTag = document.getElementById('json-ld-script');
    const jsonLdString = JSON.stringify(refrigeratorLD);
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
      {JSON.stringify(refrigeratorLD)}
      </script>
      <div className="appliance-container" >
      <div className="photos-container">
        <img loading="lazy" src={fridge1} alt="Free standing refrigerator in the kitchen"/>
        <img loading="lazy" src={fridge2} alt="Built-in refrigerator in the kitchen"/>
      </div>
      <div className="text-container">
        <h1>Refrigerator and Freezer repair</h1>
        <p>
        The average lifespan of a refrigerator is typically between 10 to 15 years, with high-end models potentially lasting up to 20 years with proper care. Factors such as maintenance, usage patterns, and the type of refrigerator play significant roles in determining its longevity. Regular upkeep, like cleaning condenser coils and maintaining door seals, can help extend its lifespan.
        </p>
        <p>
          Whether it's routine maintenance or emergency repairs, Major Appliance Repair is here to restore your refrigerator's functionality with expertise and care. Experience the peace of mind that comes with knowing your appliance is in capable hands. Call Major Appliance Repair for the refrigerator repair.
        </p>
        <div className="repairs">
          <h2>We will help you with:</h2>
          <p>Compressor Repairs</p>
          <p>Thermostat Replacement</p>
          <p>Leak Repairs</p>
          <p>Defrosting Issues</p>
          <p>Fan Motor Replacement</p>
          <p>Door Seal Replacement</p>
          <p>Coolant Recharging</p>
          <p>Water Dispenser/Ice Maker Repair</p>
          <p>Cleaning and Maintenance</p>
          <p>And anything else!</p>
        </div>
      </div>
      <div className="advice-container">
        <h2>What you can do before calling for service</h2>
        <div className="advices">
          <p>Check Power Supply</p>
          <p>Inspect the Thermostat</p>
          <p>Listen for Unusual Noises</p>
          <p>Check the Condenser Coils</p>
          <p>Examine the Door Seals</p>
          <p>Inspect the Evaporator Fan</p>
          <p>Check the Compressor</p>
          <p>Look at the Defrost System</p>
          <p>Assess the Water Connection</p>
          <p>Consult the User Manual</p>
        </div>
      </div>
      <div className="photos-container-mobile">
        <img loading="lazy" src={fridge1} alt="Free standing refrigerator in the kitchen"/>
        <img loading="lazy" src={fridge2} alt="Built-in refrigerator in the kitchen"/>
      </div>
    </div>
    <Charges />
    <ServiceArea />
  </div>
};

export default RefrigeratorRepair;
