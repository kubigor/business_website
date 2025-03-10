import React from 'react'
import range1 from '../../Images/appliances/thor-range.webp'
import range2 from '../../Images/appliances/bosch-range.webp'
import Charges from '../../Sections/Charges';
import ServiceArea from '../../Sections/ServiceArea';
import { Helmet } from 'react-helmet';
import { rangeLD } from '../JSON-LD';
import './Appliance.css'

const RangeRepair = () => {
  const jsonLdString = JSON.stringify(rangeLD)

  return <div className="page-container">
    <Helmet>
        <script type="application/ld+json">{jsonLdString}</script>
        <title>Range Repair and Oven Repair in Seattle</title>
        <meta name="description" content="Professional appliance repair services for a wide range of major appliances, such as refrigerators, washing machines, dryers, dishwashers, and more" />
        <link rel="canonical" href="https://majorappliancerepair.info/services/range-repair/"></link>
        <link rel="preload" href={range1} as="image" />
        <link rel="preload" href={range2} as="image" />    
    </Helmet>
  <div className="appliance-container" >
    <div className="photos-container">
      <img loading="lazy" src={range1} alt="Range and oven repair in Seattle"/>
      <img loading="lazy" src={range2} alt="Range and oven repair in Bellevue"/>
    </div>
    <div className="text-container">
      <header>
        <h1>Range and Oven Repair</h1>
        <p>An oven that will not heat properly can be frustrating, especially when preparing meals. Whether you have a gas or electric oven, several factors could be causing the issue. This range repair guide covers the 10 most common oven heating problems and how to fix them.</p>
      </header>

      <section>
        <h2>1. Power Supply Issues (For Electric Ovens)</h2>
        <h3>Possible Causes:</h3>
        <ul>
            <li>Blown fuse or tripped circuit breaker</li>
            <li>Faulty power cord</li>
            <li>Loose connections in the outlet</li>
        </ul>
        <h3>How to Fix It:</h3>
        <ul>
            <li>Ensure the oven is properly plugged in.</li>
            <li>Reset the circuit breaker to address the range repair issues.</li>
            <li>Test the outlet voltage with a multimeter.</li>
            <li>If the issue persists, contact an oven repair technician.</li>
        </ul>
    </section>

    <section>
        <h2>2. Gas Supply Issues (For Gas Ovens)</h2>
        <h3>Possible Causes:</h3>
        <ul>
            <li>Gas valve shut off</li>
            <li>Clogged gas line</li>
            <li>Defective gas regulator</li>
        </ul>
        <h3>How to Fix It:</h3>
        <ul>
            <li>Ensure the gas supply valve is open.</li>
            <li>Check if other gas appliances are working.</li>
            <li>If you suspect a gas leak, turn off the oven and call a technician immediately to handle the range repair.</li>
        </ul>
    </section>

    <section>
        <h2>3. Faulty Oven Igniter (Gas Ovens)</h2>
        <h3>Possible Causes:</h3>
        <ul>
            <li>Weak or broken igniter</li>
            <li>Igniter takes too long to glow</li>
            <li>Igniter clicks but does not light</li>
        </ul>
        <h3>How to Fix It:</h3>
        <ul>
            <li>Check if the igniter glows when turning on the oven.</li>
            <li>If it does not glow or takes too long, replace it.</li>
            <li>Contact a technician for safe installation and further range repair needs.</li>
        </ul>
    </section>

    <section>
        <h2>4. Broken Bake Element (Electric Ovens)</h2>
        <h3>Possible Causes:</h3>
        <ul>
            <li>Damaged or burned-out heating element</li>
            <li>Uneven or no heating</li>
            <li>Visible burn marks on the element</li>
        </ul>
        <h3>How to Fix It:</h3>
        <ul>
            <li>Inspect the bake element for cracks or burn marks.</li>
            <li>Unplug the oven before replacing the element to perform a safe range repair.</li>
        </ul>
    </section>

    <section>
        <h2>5. Defective Oven Control Board</h2>
        <h3>Possible Causes:</h3>
        <ul>
            <li>Electrical failure in the control board</li>
            <li>Error codes displayed on the panel</li>
        </ul>
        <h3>How to Fix It:</h3>
        <ul>
            <li>Try resetting the oven by unplugging it for five minutes.</li>
            <li>If the issue persists, the control board may need replacement.</li>
            <li>Contact a technician for diagnosis related to your range repair needs.</li>
        </ul>
    </section>

    <section>
        <h2>When to Call a Professional for Oven Repair</h2>
        <p>While some issues can be resolved with DIY troubleshooting, others require professional expertise. Contact a professional oven repair service if:</p>
        <ul>
            <li>Your oven is not heating at all.</li>
            <li>The igniter will not light.</li>
            <li>Burnt wires or a damaged control board are visible and may need range repair.</li>
            <li>The oven trips the circuit breaker frequently.</li>
        </ul>
    </section>

    <section>
        <h2> Why Choose Us for Your Cooktop Repair?</h2>
        <ul>
        <li><strong>We Are Licencensed, Bonded and Insured:</strong> Check out our license - <a href="https://secure.lni.wa.gov/verify/Detail.aspx?UBI=604560224&LIC=MAJORAR785C2&SAW=" target="_blank" rel="noreferrer">MAJORAR785C2</a> !</li>
        <li><strong>Great Reputation:</strong> We are highly <a href="https://biz.yelp.com/biz_info/wGGpN1FF5vLLv4D6PYuj4Q" target="_blank" rel="noreferrer"> recommended </a> by your neighbors!</li>            <li><strong>Expert Technicians:</strong> Our professionals are skilled in repairing all types of cooktops, including gas, electric, and induction models.</li>
            <li><strong>Fast & Reliable Service:</strong> We offer same-day service for emergency repairs.</li>
            <li><strong>Affordable Pricing:</strong> Get a transparent quote with no hidden fees.</li>
            <li><strong>High-Quality Parts:</strong> We only use genuine replacement parts to ensure longevity and performance.</li>
            <li><strong>Satisfaction Guarantee:</strong> We stand behind our work with a repair warranty for your peace of mind.</li>
        </ul>
    </section>

    <section>
        <h2>Schedule Your Oven Repair Today</h2>
        <p>Do not let a broken oven ruin your cooking routine. Contact Major Appliance Repair today for professional range repair services.</p>
    </section>
    </div>
    <div className="photos-container-mobile">
      <img loading="lazy" src={range1} alt="Range and oven repair in Seattle"/>
      <img loading="lazy" src={range2} alt="Range and oven repair in Bellevue"/>
    </div>
  </div>
<Charges />
<ServiceArea />
</div>
}
export default RangeRepair;
