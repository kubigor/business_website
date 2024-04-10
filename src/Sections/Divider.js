// This is Contact component, it will contain contact form.
import React from "react";
import phone from '../Images/phone-icon.svg'
import {phoneNumber} from '../globalVars.js'
import "./Divider.css"

const Divider = () => {

  const numberLink = `tel:${phoneNumber}`
 
  return <div id="divider-container">
    <div id="divider">
      <p>CALL US FOR FREE ESTIMATE</p>
      <div>
        <img src={phone} alt="phone" />
      </div>
      <div>
        <a id="phone-number" href={numberLink}>{phoneNumber}</a>
      </div>
    </div>
  </div>;
};

export default Divider;
