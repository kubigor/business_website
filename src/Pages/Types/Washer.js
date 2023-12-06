import React from 'react'
import washer1 from '../../Images/appliances/lg-laundry-center.jpeg'
import washer2 from '../../Images/appliances/whirlpool-washer.jpg'
import Charges from '../../Sections/Charges';
import './Appliance.css'

const WasherRepair = () => {
  
  return <div class="page-container">
  <div class="appliance-container" >
  <div class="photos-container">
    <img src={washer1} alt="Dishwasher in the kitchen"/>
    <img src={washer2} alt="Dishwasher range in the kitchen"/>
  </div>
  <div class="text-container">
    <h1>Washer and Laundry Center repair</h1>
    <p>
    The average lifespan of a washing machine is typically around 10 to 13 years. This duration can vary depending on factors such as the brand, model, usage frequency, and maintenance practices. Regular maintenance, like cleaning filters and checking hoses, can help extend a washing machine's life. High-end models might last longer due to better build quality, while heavy usage and neglect can shorten the lifespan of any washing machine.    </p>
    <p>
    At Major Appliance Repair, we're not just fixing machines; we're restoring a crucial part of your daily life. Trust us to bring your washer back to optimal performance with professionalism and care.
    </p>
    <div class="repairs">
      <h3>We will help you with:</h3>
      <p>Drum and Agitator Repairs</p>
      <p>Motor Repairs or Replacement</p>
      <p>Transmission and Drive Belt Repairs</p>
      <p>Water Pump Repairs</p>
      <p>Water Inlet Valve Replacement</p>
      <p>Drainage Issues</p>
      <p>Control Panel and Electronic Repairs</p>
      <p>Suspension and Shock Absorber Replacement</p>
      <p>Timer, Thermostat, and Heating Element Repairs</p>
      <p>Cleaning and Maintenance</p>
      <p>And anything else!</p>
    </div>
  </div>
  <div class="advice-container">
    <h3>What you can do before calling for service</h3>
    <div class="advices">
      <p>Check Power Supply</p>
      <p>Inspect the Control Panel</p>
      <p>Verify Door or Lid Closure</p>
      <p>Check Water Supply</p>
      <p>Inspect Drainage Issues</p>
      <p>Examine Belts and Pulleys</p>
      <p>Test Spin and Wash Cycles</p>
      <p>Listen for Unusual Noises</p>
      <p>Assess Water Leakage</p>
      <p>Consult the User Manual</p>
      <p></p>
    </div>
  </div>
  <div class="photos-container-mobile">
    <img src={washer1} alt="Dishwasher in the kitchen"/>
    <img src={washer2} alt="Dishwasher range in the kitchen"/>
  </div>
</div>
<Charges />
</div>
};

export default WasherRepair;
