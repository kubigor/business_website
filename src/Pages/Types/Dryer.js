import React from 'react'
import dryer1 from '../../Images/appliances/lg-dryer.jpg'
import dryer2 from '../../Images/appliances/whirlpool-dryer.jpg'
import Charges from '../../Sections/Charges';
import './Appliance.css'

const DryerRepair = () => {
  
  return <div class="page-container">
  <div class="appliance-container" >
  <div class="photos-container">
    <img src={dryer1} alt="Dryer stacked in the laundry room"/>
    <img src={dryer2} alt="Two dryers in the laundry room"/>
  </div>
  <div class="text-container">
    <h1>Dryer repair</h1>
    <p>
    The average lifespan of a clothes dryer is typically about 10 to 13 years. This duration can vary based on factors like the brand, model, usage habits, and maintenance. Regular cleaning of the lint filter and venting system, as well as prompt repairs of any issues, can help extend a dryer's life. Overloading and frequent use can contribute to a shorter lifespan. Generally, gas dryers may have a slightly longer lifespan compared to electric ones due to their different heating mechanisms.    </p>
    <p>
    At Major Appliance Repair, we do more than just fix appliances; we ensure your daily laundry routine is seamless and efficient. Entrust us with your dryer, and experience the Premier difference in quality and care.
    </p>
    <div class="repairs">
      <h3>We will help you with:</h3>
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
  <div class="advice-container">
    <h3>What you can do before calling for service</h3>
    <div class="advices">
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
</div>
<Charges />
</div>
};

export default DryerRepair;
