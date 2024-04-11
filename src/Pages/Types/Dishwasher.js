import React from 'react'
import dishwasher1 from '../../Images/appliances/thor-dishwasher.jpg'
import dishwasher2 from '../../Images/appliances/bosch-dishwasher.webp'
import Charges from '../../Sections/Charges';
import './Appliance.css'

const DishwasherRepair = () => {

  return <div class="page-container">
    <div class="appliance-container" >
    <div class="photos-container">
      <img loading="lazy" src={dishwasher1} alt="Dishwasher in the kitchen"/>
      <img loading="lazy" src={dishwasher2} alt="Dishwasher range in the kitchen"/>
    </div>
    <div class="text-container">
      <h1>Dishwasher repair</h1>
      <p>
      The average lifespan of a dishwasher is typically around 9 to 12 years, depending on the brand, model, and how well it is maintained. Regular cleaning and maintenance, such as cleaning filters and ensuring proper loading, can help extend its life. Factors such as the frequency of use, the hardness of water, and the quality of detergent used can also impact the longevity of a dishwasher. High-end models might last longer due to better build quality and features that reduce wear and tear.
      </p>
      <p>
      At Major Appliance Repair, we're committed to restoring the convenience and efficiency your dishwasher provides. Let us take care of your appliance with our expertise and dedication.
      </p>
      <div class="repairs">
        <h3>We will help you with:</h3>
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
    <div class="advice-container">
      <h3>What you can do before calling for service</h3>
      <div class="advices">
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
    <div class="photos-container-mobile">
      <img loading="lazy" src={dishwasher1} alt="Dishwasher in the kitchen"/>
      <img loading="lazy" src={dishwasher2} alt="Dishwasher range in the kitchen"/>
    </div>
  </div>
  <Charges />
  </div>
}
export default DishwasherRepair;
