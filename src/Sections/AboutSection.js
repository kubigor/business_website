import React from "react";
import "./AboutSection.css"

const AboutSection = () => {
  return <div id="about-container">
        <h1 id="about-title">About us</h1>
        <p id="about-text">We are a local, Bellevue-based company providing repair services in the Greater Seattle Area for a wide range of appliance brands and types. Our technicians, each with 5-10 years of experience, are certified by major American appliance brands. Also, we are a licensed, bonded, and insured. All services are performed on-site using exclusively original parts. Our contractor license number is <a id="license-number" rel="noreferrer" target="_blank" href="https://secure.lni.wa.gov/verify/Detail.aspx?UBI=604560224&LIC=MAJORAR785C2&SAW=">MAJORAR785C2</a>. Below, you will find a list of our services along with other relevant details. Please feel free to give us a call with any questions, particularly if the service you require is not listed. We are always happy to assist you!</p>
        <div id="lists">
            <ul className="about-list">
                <li className="list-header">Brands</li>
                <li><a href="https://majorappliancerepair.info/whirlpool-repair/ " target="_blank" rel="noreferrer">Whirlpool repair</a></li>
                <li><a href="https://majorappliancerepair.info/samsung-repair/ " target="_blank" rel="noreferrer">Samsung repair</a></li>
                <li><a href="https://majorappliancerepair.info/lg-repair/ " target="_blank" rel="noreferrer">LG repair</a></li>
                <li><a href="https://majorappliancerepair.info/kenmore-repair/ " target="_blank" rel="noreferrer">Kenmore repair</a></li>
                <li><a href="https://majorappliancerepair.info/ge-repair/ " target="_blank" rel="noreferrer">General Electric repair</a></li>
                <li><a href="https://majorappliancerepair.info/bosch-repair/ " target="_blank" rel="noreferrer">Bosch repair</a></li>
                <li><a href="https://majorappliancerepair.info/jennair-repair/ " target="_blank" rel="noreferrer">JennAir repair</a></li>
                <li><a href="https://majorappliancerepair.info/frigidaire-repair/ " target="_blank" rel="noreferrer">Frigidaire repair</a></li>
                <li><a href="https://majorappliancerepair.info/maytag-repair/ " target="_blank" rel="noreferrer">Maytag repair</a></li>
                <li><a href="https://majorappliancerepair.info/kitchenaid-repair/ " target="_blank" rel="noreferrer">KitchenAid repair</a></li>
                <li><a href="https://majorappliancerepair.info/thermador-repair/" target="_blank" rel="noreferrer">Thermador Repair</a></li>
                <li><a href="https://majorappliancerepair.info/speed-queen-repair/ " target="_blank" rel="noreferrer">Speed Queen repair</a></li>
                <li><a href="https://majorappliancerepair.info/bertazzoni-repair/" target="_blank" rel="noreferrer">Bertazzoni repair</a></li>
                <li><a href="https://majorappliancerepair.info/bluestar-repair/" target="_blank" rel="noreferrer">Bluestar repair</a></li>
                <li><a href="https://majorappliancerepair.info/sub-zero-wolf-repair/" target="_blank" rel="noreferrer">Wolf repair</a></li>
                <li><a href="https://majorappliancerepair.info/viking-repair/ " target="_blank" rel="noreferrer">Viking repair</a></li>
                <li><a href="https://majorappliancerepair.info/miele-repair/ " target="_blank" rel="noreferrer">Miele repair</a></li>
                <li><a href="https://majorappliancerepair.info/fisher-and-paykel-repair/ " target="_blank" rel="noreferrer">Fisher & Paykel repair</a></li>
                <li><a href="https://majorappliancerepair.info/dacor-repair/ " target="_blank" rel="noreferrer">Dacor repair</a></li>
                <li><a href="https://majorappliancerepair.info/ge-monogram-repair/ " target="_blank" rel="noreferrer">GE Monogram repair</a></li>
                <li><a href="https://majorappliancerepair.info/sub-zero-wolf-repair/" target="_blank" rel="noreferrer">Sub Zero repair</a></li>
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
        <a id="last-item" href="https://majorappliancerepair.info/luxury-kitchen-appliance-repair/">We service high ends as well!</a>
    </div>
};

export default AboutSection;
