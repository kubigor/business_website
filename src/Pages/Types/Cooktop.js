import React from 'react'
import cooktop1 from '../../Images/appliances/thor-cooktop.webp'
import cooktop2 from '../../Images/appliances/whirlpool-cooktop.webp'
import Charges from '../../Sections/Charges';
import ServiceArea from '../../Sections/ServiceArea';
import { Helmet } from 'react-helmet';
import { cooktopLD } from '../JSON-LD';
import './Appliance.css'

const CooktopRepair = () => {
  const jsonLdString = JSON.stringify(cooktopLD)

  return <div className="page-container">
    <Helmet>
        <script type="application/ld+json">{jsonLdString}</script>
        <title>Cooktop Repair</title>
        <meta name="description" content="Professional appliance repair services for a wide range of major appliances, such as refrigerators, washing machines, dryers, dishwashers, and more" />
        <link rel="canonical" href="https://majorappliancerepair.info/services/cooktop/"></link>
        <link rel="preload" href={cooktop1} as="image" />
        <link rel="preload" href={cooktop2} as="image" />
      </Helmet>
  <div className="appliance-container" >
  <div className="photos-container">
    <img loading="lazy" src={cooktop1} alt="Gas cooktop"/>
    <img loading="lazy" src={cooktop2} alt="Electrcic cooktop with ceramic glass"/>
  </div>
  <div className="text-container">
    <h1>Cooktop repair</h1>
    <p>
    The average lifespan of cooktops varies by type: electric cooktops typically last 13 to 15 years, gas cooktops about 15 years. Lifespan can be extended with regular maintenance and depends on factors like usage frequency, installation quality, and build quality.    </p>
    <p>
    At Major Appliance Repair, we're not just fixing appliances; we're restoring an essential part of your daily kitchen experience. Trust us to bring your cooktop back to its best with professionalism and care. Call Major Appliance Repair for the cooktop repair.    </p>
    <div className="repairs">
      <h2>We will help you with:</h2>
      <p>Burner Repair or Replacement</p>
      <p>Ignition Problems</p>
      <p>Element Replacement</p>
      <p>Gas Leak Repairs</p>
      <p>Control Panel and Switch Repairs</p>
      <p>Glass Top Repairs</p>
      <p>Wiring and Electrical Repairs</p>
      <p>Thermocouple Replacement</p>
      <p>Cleaning and Maintenance</p>
      <p>And anything else!</p>
    </div>
  </div>
  <div className="advice-container">
    <h2>What you can do before calling for service</h2>
    <div className="advices">
      <p>Check Power Supply</p>
      <p>Inspect Heating Elements</p>
      <p>Burner Inspection</p>
      <p>Check Gas Flow</p>
      <p>Inspect Cooking Surface</p>
      <p>Visual Inspection</p>
      <p>Consult the User Manual</p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
  <div className="photos-container-mobile">
    <img loading="lazy" src={cooktop1} alt="Gas cooktop"/>
    <img loading="lazy" src={cooktop2} alt="Electrcic cooktop with ceramic glass"/>
  </div>
</div>
<Charges />
<ServiceArea />
</div>
};

export default CooktopRepair;
