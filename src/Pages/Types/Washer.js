import React from 'react'
import washer1 from '../../Images/appliances/lg-laundry-center.webp'
import washer2 from '../../Images/appliances/whirlpool-washer.webp'
import Charges from '../../Sections/Charges';
import ServiceArea from '../../Sections/ServiceArea';
import { Helmet } from 'react-helmet';
import { washerLD } from '../JSON-LD';
import './Appliance.css'

const WasherRepair = () => {
  const jsonLdString = JSON.stringify(washerLD)

  return <div className="page-container">
    <Helmet>
        <script type="application/ld+json">{jsonLdString}</script>
        <title>Washer Repair in Seattle</title>
        <meta name="description" content="Professional washer repair services. Learn how to fix a washer that won’t spin, drain, or start. Find expert washer repair near you." />
        <link rel="canonical" href="https://majorappliancerepair.info/services/washer-repair/"></link>
        <link rel="preload" href={washer1} as="image" />
        <link rel="preload" href={washer2} as="image" />
    </Helmet>
  <div className="appliance-container" >
  <div className="photos-container">
    <img loading="lazy" src={washer1} alt="Washer repair in Seattle"/>
    <img loading="lazy" src={washer2} alt="Washer repair in Bellevue"/>
  </div>
  <div className="text-container">
      <header>
        <h1>Washing Machine Repair</h1>
        <p>Washing machines are essential for keeping laundry fresh and clean, but they can develop issues over time. Whether your washer won’t spin, drain, or even start, understanding the problem can save time and money. Learn how to troubleshoot and when to call for professional washer repair services.</p>

      </header>

      <section>
        <h2>1. Washer Not Starting</h2>
        <h3>Possible Causes:</h3>
        <ul>
            <li>Power supply issues</li>
            <li>Faulty lid switch</li>
            <li>Defective control panel</li>
        </ul>
        <h3>How to Fix It:</h3>
        <ul>
            <li>Ensure the washer is properly plugged in.</li>
            <li>Reset the circuit breaker to resolve power issues.</li>
            <li>Check and replace a faulty lid switch if needed.</li>
            <li>If the problem persists, contact a washer repair technician.</li>
        </ul>
    </section>

    <section>
        <h2>2. Washer Not Draining</h2>
        <h3>Possible Causes:</h3>
        <ul>
            <li>Clogged drain hose</li>
            <li>Malfunctioning drain pump</li>
            <li>Blocked filter</li>
        </ul>
        <h3>How to Fix It:</h3>
        <ul>
            <li>Check for kinks in the drain hose and clear any blockages.</li>
            <li>Clean the washer filter to improve drainage.</li>
            <li>If the drain pump is faulty, replace it or seek washer repair assistance.</li>
        </ul>
    </section>

    <section>
        <h2>3. Washer Not Spinning</h2>
        <h3>Possible Causes:</h3>
        <ul>
            <li>Unbalanced load</li>
            <li>Faulty drive belt</li>
            <li>Worn-out motor coupling</li>
        </ul>
        <h3>How to Fix It:</h3>
        <ul>
            <li>Rearrange the laundry load for proper balance.</li>
            <li>Inspect the drive belt for wear and replace it if necessary.</li>
            <li>Check the motor coupling and replace it if worn out.</li>
            <li>For persistent issues, consult a washer repair expert.</li>
        </ul>
    </section>

    <section>
        <h2>4. Washer Leaking Water</h2>
        <h3>Possible Causes:</h3>
        <ul>
            <li>Loose or damaged hoses</li>
            <li>Faulty door seal</li>
            <li>Overuse of detergent</li>
        </ul>
        <h3>How to Fix It:</h3>
        <ul>
            <li>Inspect and tighten water supply hoses.</li>
            <li>Replace a damaged door seal to prevent leaks.</li>
            <li>Use the recommended amount of detergent to avoid overflows.</li>
        </ul>
    </section>

    <section>
        <h2>5. Washer Making Unusual Noises</h2>
        <h3>Possible Causes:</h3>
        <ul>
            <li>Unbalanced load</li>
            <li>Worn-out bearings</li>
            <li>Loose drive belt</li>
        </ul>
        <h3>How to Fix It:</h3>
        <ul>
            <li>Ensure laundry is evenly distributed in the drum.</li>
            <li>Check the washer bearings and replace them if needed.</li>
            <li>Inspect and tighten the drive belt.</li>
            <li>If noises persist, schedule a washer repair service.</li>
        </ul>
    </section>

    <section>
        <h2>When to Call a Professional for Washer Repair</h2>
        <p>Some washer problems require professional assistance. Call a washer repair expert if:</p>
        <ul>
            <li>The washer does not start at all.</li>
            <li>There are electrical issues or error codes.</li>
            <li>Water is leaking from internal components.</li>
            <li>The washer drum does not spin despite troubleshooting.</li>
        </ul>
    </section>

    <section>
        <h2>Why Choose Us for Your Cooktop Repair?</h2>
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
        <h2>Schedule Your Washer Repair Today</h2>
        <p>Do not let a faulty washer disrupt your routine. Contact expert washer repair professionals today for fast and reliable service.</p>
    </section>
  </div>
  <div className="photos-container-mobile">
    <img loading="lazy" src={washer1} alt="Washer repair in Seattle"/>
    <img loading="lazy" src={washer2} alt="Washer repair in Bellevue"/>
  </div>
</div>
<Charges />
<ServiceArea />
</div>
};

export default WasherRepair;
