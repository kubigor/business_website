// This is Contact component, it will contain contact form.
import React from "react";
import phone from '../Images/phone-icon.svg'
import {phoneNumber} from '../globalVars.js'
import Fee from "../components/Fee.js"
import "./Divider.css"

const Divider = () => {
  document.addEventListener("DOMContentLoaded", function() {
    const numberLink = document.getElementById("phone-number");
    numberLink.setAttribute("href", "tel:" + phoneNumber);
  });
  return <div id="divider-container">
    <div id="divider">
      <div id="fee-cloud">
        <Fee></Fee>
      </div>
      <p>CALL US FOR FREE ESTIMATE</p>
      <div>
        <img src={phone} alt="phone" />
      </div>
      <div>
        <a id="phone-number">{phoneNumber}</a>
      </div>
    </div>
  </div>;
};

export default Divider;
