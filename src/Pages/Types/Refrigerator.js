import React from 'react'
import fridge1 from '../../Images/appliances/whirlpool-refrigerator.png'
import fridge2 from '../../Images/appliances/sub-zero-refrigerator.jpg'
import Charges from '../../Sections/Charges';
import './Appliance.css'

const RefrigeratorRepair = () => {
  
  return <div class="page-container">
      <div class="appliance-container" >
      <div class="photos-container">
        <img src={fridge1} alt="Free standing refrigerator in the kitchen"/>
        <img src={fridge2} alt="Built-in refrigerator in the kitchen"/>
      </div>
      <div class="text-container">
        <h1>Refrigerator and Freezer repair</h1>
        <p>
        The average lifespan of a refrigerator is typically between 10 to 15 years, with high-end models potentially lasting up to 20 years with proper care. Factors such as maintenance, usage patterns, and the type of refrigerator play significant roles in determining its longevity. Regular upkeep, like cleaning condenser coils and maintaining door seals, can help extend its lifespan.
        </p>
        <p>
          Whether it's routine maintenance or emergency repairs, Major Appliance Repair is here to restore your refrigerator's functionality with expertise and care. Experience the peace of mind that comes with knowing your appliance is in capable hands.
        </p>
        <div class="repairs">
          <h3>We will help you with:</h3>
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
      <div class="advice-container">
        <h3>What you can do before calling for service</h3>
        <div class="advices">
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
      <div class="photos-container-mobile">
        <img src={fridge1} alt="Free standing refrigerator in the kitchen"/>
        <img src={fridge2} alt="Built-in refrigerator in the kitchen"/>
      </div>
    </div>
    <Charges />
  </div>
};

export default RefrigeratorRepair;
