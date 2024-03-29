import React from "react";
import "./AboutSection.css"
import { Link } from 'react-router-dom';

const AboutSection = () => {
    function ScrollUp() {
        const element = document.getElementById('menu');
        element.scrollIntoView({
          behavior:"smooth",
          block:"end",
          inline:"nearest"
        })
      }
  return <div id="about-container">
        <h1 id="about-title">About us</h1>
        <p id="about-text">We are a local, family-owned company providing repair services for a wide range of appliance brands and types. Our technicians, each with 5-10 years of experience, are certified by major American appliance brands. Also, we are a licensed, bonded, and insured. All services are performed on-site using exclusively original parts. Our contractor license number is <a id="license-number" target="_blank" href="https://secure.lni.wa.gov/verify/Detail.aspx?UBI=604560224&LIC=MAJORAR785C2&SAW=">MAJORAR785C2</a>. Below, you will find a list of our services along with other relevant details. Please feel free to give us a call with any questions, particularly if the service you require is not listed. We are always happy to assist you!</p>
        <div id="lists">
            <ul class="about-list">
                <li class="list-header">Brands</li>
                <li>Whirlpool</li>
                <li>Samsung</li>
                <li>LG</li>
                <li>Kenmore</li>
                <li>Bosch</li>
                <li>JennAir</li>
                <li>General Electric</li>
                <li>Frigidaire</li>
                <li>Maytag</li>
                <li>KitchenAid</li>
                <li>Thermador</li>
                <li>Speed Queen</li>
                <li>Bertazzoni</li>
                <li>Bluestar</li>
                <li>Wolf</li>
                <li>Viking</li>
                <li>Fisher & Paykel</li>
                <li>Dacor</li>
                <li>GE Monogram</li>
                <li>Sub Zero</li>
                <li>And other!</li>
            </ul>
            <ul class="about-list">
                <li class="list-header">Services</li>
                <li>Refrigerator repair</li>
                <li>Freezer repair</li>
                <li>Washer repair</li>
                <li>Dryer repair</li>
                <li>Laundry center repair</li>
                <li>Dishwasher repair</li>
                <li>Oven repair</li>
                <li>Range repair</li>
                <li>Built-in oven repair</li>
                <li>Cooktop repair</li>
                <li>Dishwasher installation</li>
                <li>Ice maker installation</li>
                <li>Garbage disposal installation</li>
                <li>Washer and dryer hook up</li>
                <li>All types of electric</li>
                <li>and gas ranges</li>
                <li>And much more!</li>
            </ul>
        </div>
        <Link id="last-item" to ="/high-ends">We service high ends as well!</Link>
    </div>
};

export default AboutSection;
