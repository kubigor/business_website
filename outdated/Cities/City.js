import React from 'react'
import NotFound from '../NotFound';
import city_data from './CityData';
import ServiceArea from '../../Sections/ServiceArea';
import car from "../../Images/Appliance-repair-work-van-cropped.webp"
import car2 from "../../Images/Appliance-repair-work-van-cropped-2.webp"
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { cityLD } from '../JSON-LD';
import './City.css'


const CityPage = () => {
  const jsonLdString = JSON.stringify(cityLD)
  let { cityName } = useParams();
  if (city_data[cityName] === undefined) {
    console.log(cityName)
    return <NotFound />
  }
  const name = city_data[cityName]['name'];
  const name_upper = name.toUpperCase();
  return <div className="city-page-container">
      <Helmet>
        <script type="application/ld+json">{jsonLdString}</script>
        <title>Appliance Repair in {name} for All Major Brands</title>
        <meta name="description" content={`For reliable appliance repair in ${name}, choose Major Appliance Repair. We fix refrigerators, ovens, and more effectively.`} />
        <meta property="og:url" content={`https://majorappliancerepair.info/service-area/${cityName}/`}></meta>
        <meta name="keywords" content={`Appliance repair in ${name}`}></meta>
        <link rel="canonical" href={`https://majorappliancerepair.info/service-area/${cityName}/`}></link>
        <link rel="preload" href={`/places/${cityName}.webp`} as="image" />
        <link rel="preload" href="/static/media/Appliance-repair-work-van-cropped.04108009164f017a114b.webp" as="image" />
        <link rel="preload" href="/static/media/Appliance-repair-work-van-cropped-2.1776c80c3568a2b719c1.webp" as="image" />
      </Helmet>
    <div className="city-photo-container">
      <img loading="lazy" className="city-photo" src={city_data[cityName].photo} alt="City skyline"/>
      <div className="overlay"><h1 className="city-header">APPLIANCE REPAIR IN {name_upper}</h1></div>
    </div>
    <div className="city-text">
      <h2>Trusted Appliance Repair in {name}</h2>
      <p><strong>Choose Major Appliance Repair for your appliance repair in {name}.</strong> Contact us to discuss refrigerator repair, oven repair, dishwasher repair, washer repair, dryer repair, and more. Our experienced technicians have the knowledge, skill, and training to restore your appliances to peak performance, ensuring your home stays comfortable and efficient.</p>
 <section>
    <h2>Our Appliance Repair Services</h2>
    
    <article>
      <h3>Refrigerator Repair</h3>
      <p>Keep your food fresh and safe with our comprehensive refrigerator repair services in {name}. We quickly address cooling problems, water leaks, malfunctioning ice makers, and other issues to maintain your appliance’s performance.</p>
    </article>

    <article>
      <h3>Washer and Dryer Repair</h3>
      <p>Don't let laundry pile up. Our technicians efficiently diagnose and fix common problems such as drum malfunctions, faulty motors, and electrical issues in washers and dryers, ensuring your appliance repair in {name} is handled swiftly.</p>
    </article>

    <article>
      <h3>Oven and Stove Repair</h3>
      <p>Get back to cooking your favorite meals without interruption. We specialize in repairing ovens and stoves by addressing temperature inconsistencies, faulty igniters, and broken heating elements so you can enjoy hassle-free cooking.</p>
    </article>

    <article>
      <h3>Dishwasher Repair</h3>
      <p>Say goodbye to hand-washing dishes. Our dishwasher repair services tackle draining issues, leaks, and malfunctioning controls, making sure your appliance repair in {name} is prompt and reliable.</p>
    </article>
  </section>

  <section>
    <h2>Why Choose Major Appliance Repair?</h2>
    <ul>
      <li><strong>Brand Expertise:</strong> Our technicians are well-versed in servicing major appliance brands such as Samsung, LG, Whirlpool, GE, and more. Regardless of the brand, we have the expertise to deliver efficient repairs.</li>
      <li><strong>Fast and Reliable Service:</strong> We understand that a malfunctioning appliance can disrupt your daily routine. That’s why we prioritize quick response times and efficient repairs.</li>
      <li><strong>Genuine Parts:</strong> We use only genuine replacement parts from trusted manufacturers, ensuring the longevity and quality of our repairs.</li>
      <li><strong>Transparent Pricing:</strong> Enjoy honest, upfront estimates with no hidden surprises. We believe in clear and transparent pricing before any repair work begins.</li>
      <li><strong>Customer Satisfaction Guaranteed:</strong> Your satisfaction is our top priority. We strive to exceed your expectations with every repair, and we won’t rest until you’re completely satisfied.</li>
    </ul>
  </section>
      <div className="van-photos">
        <img loading="lazy" src={car} alt="Appliance repair work van"></img>
        <img loading="lazy" src={car2} alt="Appliance repair work van"></img>
      </div>
  <section>
    <h2>Expertise in Appliance Repair in {name}</h2>
    <p>For expert appliance repair in {name}, Major Appliance Repair is your trusted partner for efficient and reliable solutions. Our team of skilled technicians specializes in a wide range of services—from refrigerator and dishwasher repairs to fixing washers, dryers, ovens, and stoves. With years of experience serving the {name} community, we ensure that any issue, whether it’s cooling problems, water leaks, or electrical malfunctions, is quickly diagnosed and fixed. Our commitment to using genuine parts and providing transparent pricing guarantees that your appliance repair in {name} is both cost-effective and long-lasting.</p>
    <p>We also offer maintenance tips and routine check-ups to help prevent future issues, saving you time and money while extending the life of your appliances. By choosing us, you're not only opting for immediate repairs but also a long-term solution to keeping your home running smoothly.</p>
  </section>

  <section>
    <h2>Schedule Your Service Today</h2>
    <p>Don’t let appliance issues disrupt your daily life. Contact Major Appliance Repair now to schedule your appliance repair in {name}. Experience the quality, reliability, and expertise that set us apart as your go-to partner for home appliance repairs.</p>
  </section>
    </div>
    <ServiceArea />
  </div>
};

export default CityPage;
