// This is Contact component, it will contain contact form.
import React from 'react'
import phone from '../images/phone-icon.svg'
import {phoneNumber} from '../globalVars.js'
import "./Divider.css"

const Divider = () => {

  const numberLink = `tel:${phoneNumber}`
 
  return <div id="divider-container">
    <div id="divider">
      <h1>CALL US FOR FREE ESTIMATE</h1>
      <div>
        <img loading="lazy" src={phone} alt="phone" />
      </div>
      <div>
        <a id="phone-number" href={numberLink}>{phoneNumber}</a>
      </div>
    </div>
  </div>;
};

export default Divider;
