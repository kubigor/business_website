// This is footer component
import React from "react";
import phone from '../Images/phone-icon.svg'
import mail from '../Images/envelope-icon.svg'
import mark from '../Images/map-pointer.svg'
import logo from '../Images/Major-appliance-repair-logo.png'
import lni from '../Images/labor-and-industries-icon.png'
import tnc from '../Images/terms-and-conditions-icon.jpg'
import google from '../Images/googlemaps-icon.png'
import yelp from '../Images/yelp-logo.png'

import { Link } from "react-router-dom";
import {phoneNumber} from "../globalVars"
import {email} from "../globalVars"
import {address} from "../globalVars"
import {addressDirection} from "../globalVars";


import "./Footer.css"

const Footer = () => {
  
  const numberLink = `tel:${phoneNumber}`
  const emailLink = `mailto:${email}`
  const addressLink = addressDirection
  
  function ScrollUp() {
    const element = document.getElementById('menu');
    element.scrollIntoView({
      behavior:"smooth",
      block:"end",
      inline:"nearest"
    })
  }
  return <div id="footer">
    <div id="footer-first-section">
      <div class="section-card">
        <img loading="lazy" src={phone} alt="phone" />
        <div class="section-text">
          <p>CALL US FOR FREE</p>
          <a id="number" href={numberLink}>{phoneNumber}</a>
        </div>
      </div>
      <div class="section-card">
        <img loading="lazy" src={mail} alt="mail" />
        <div class="section-text">
          <p>WRITE AT ANY TIME</p>
          <a id="email-address" href={emailLink}>{email}</a>
        </div>
      </div>
      <div class="section-card">
        <img loading="lazy" src={mark} alt="mark" />
        <div class="section-text">
          <p>THE OFFICE LOCATION</p>
          <a id="address-direction" href={addressLink}>{address}</a>
        </div>
      </div>
    </div>
    <div id="footer-second-section">
      <div class="footer-column">
        <Link to ="/"><img loading="lazy" id="company-logo" src={logo} style={{width:"16em"}} alt="company logo" onClick={ScrollUp}/></Link>
        <div id="icons">
          <a href="https://www.yelp.com/biz/major-appliance-repair-bellevue-4"><img loading="lazy" class="icon" src={yelp} alt="terms and condtions icon"/></a>
          <a href="https://www.google.com/maps/place/Major+Appliance+Repair/@47.642346,-122.2022255,10z/data=!4m6!3m5!1s0x549007315f4d880f:0x3480d761c45eca0d!8m2!3d47.642346!4d-122.2022255!16s%2Fg%2F11q95dzh93?entry=ttu"><img loading="lazy" class="icon" src={google} alt="terms and condtions icon"/></a>
          <a href="https://secure.lni.wa.gov/verify/Detail.aspx?UBI=604560224&LIC=MAJORAR785C2&SAW="><img loading="lazy" class="icon" src={lni} alt="labor and industries logo"/></a>
          <Link to ="/terms-of-service" onClick={ScrollUp}><img loading="lazy" class="icon" src={tnc} alt="terms and condtions icon" /></Link> 
        </div>
      </div>
      <div class="footer-column" id="footer-services">
        <Link to="/services/refrigerator" onClick={ScrollUp}>Refrigerator repair</Link>
        <Link to="/services/range" onClick={ScrollUp}>Range/Oven repair</Link>
        <Link to="/services/cooktop" onClick={ScrollUp}>Cooktop repair</Link>
        <Link to="/services/washer" onClick={ScrollUp}>Washer repair</Link>
        <Link to="/services/dryer" onClick={ScrollUp}>Dryer repair</Link>
        <Link to="/services/dishwasher" onClick={ScrollUp}>Dishwasher Repair</Link>
      </div>
      <div class="footer-column">
        <iframe title = "location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d282517.40931547293!2d-122.36461102497174!3d47.66482695510196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549007315f4d880f%3A0x3480d761c45eca0d!2sMajor%20Appliance%20Repair!5e0!3m2!1sen!2sus!4v1698993141190!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <div id="footer-bottom-line">
      <p>© 2020-2024 All rights reserved</p>
    </div>
  </div>;
};

export default Footer;
