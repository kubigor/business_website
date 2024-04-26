import React from "react";
import WorkCar from '../Images/Appliance-repair-work-car-cropped.webp'
import "./Description.css"

const Description = () => {
  return <div id="desc-container">
    <img loading="lazy" id="desc-photo" src={WorkCar} alt="Work car with Major Appliance Repair logo"></img>
    <div>
      <h2 id="desc-header">Meet Major Appliance Repair</h2>
      <p id="desc-text"> Major Appliance Repair is your trusted local company for expert appliance repair solutions. With years of experience and a commitment to excellence, we specialize in providing services like <a href="https://majorappliancerepair.info/services/washer">washing machine repair</a>, <a href="https://majorappliancerepair.info/services/dryer">dryer repair</a>, <a href="https://majorappliancerepair.info/services/refrigerator">refrigerator repair</a>, <a href="https://majorappliancerepair.info/services/range">range repair</a>, <a href="https://majorappliancerepair.info/services/cooktop">cooktop repair</a>,  <a href="https://majorappliancerepair.info/services/range">oven repair</a>, <a href="https://majorappliancerepair.info/services/dishwasher">dishwasher repair</a>,  washing machine maintenance, dryer maintenance, ventilation cleaning, appliance odor removal and other.</p>
    </div>
  </div>
};

export default Description;
