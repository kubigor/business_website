import React from "react";
import "./AboutSection.css"
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return <div id="about-container">
        <h1 id="about-title">About us</h1>
        <p id="about-text">We are a local, Bellevue-based company providing repair services in the Greater Seattle Area for a wide range of appliance brands and types. Our technicians, each with 5-10 years of experience, are certified by major American appliance brands. Also, we are a licensed, bonded, and insured. All services are performed on-site using exclusively original parts. Our contractor license number is <a id="license-number" target="_blank" href="https://secure.lni.wa.gov/verify/Detail.aspx?UBI=604560224&LIC=MAJORAR785C2&SAW=">MAJORAR785C2</a>. Below, you will find a list of our services along with other relevant details. Please feel free to give us a call with any questions, particularly if the service you require is not listed. We are always happy to assist you!</p>
        <div id="lists">
            <ul className="about-list">
                <li className="list-header">Brands</li>
                <li>Whirlpool repair</li>
                <li>Samsung repair</li>
                <li>LG repair</li>
                <li>Kenmore repair</li>
                <li>Bosch repair</li>
                <li>JennAir repair</li>
                <li>General Electric repair</li>
                <li>Frigidaire repair</li>
                <li>Maytag repair</li>
                <li>KitchenAid repair</li>
                <li>Thermador repair</li>
                <li>Speed Queen repair</li>
                <li>Bertazzoni repair</li>
                <li>Bluestar repair</li>
                <li>Wolf repair</li>
                <li>Viking repair</li>
                <li>Fisher & Paykel repair</li>
                <li>Dacor repair</li>
                <li>GE Monogram repair</li>
                <li>Sub Zero repair</li>
                <li>And other!</li>
            </ul>
            <ul className="about-list">
                <li className="list-header">Services</li>
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
                <li>Ventilation cleaning</li>
                <li>Washer odor removal</li>
                <li>Refrigerator odor removal</li>
                <li>And much more!</li>
            </ul>
        </div>
        <Link id="last-item" to ="/high-ends">We service high ends as well!</Link>
    </div>
};

export default AboutSection;
