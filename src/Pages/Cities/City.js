import React from 'react'
import NotFound from '../NotFound';
import city_data from './CityData';
import ServiceArea from '../../Sections/ServiceArea';
import car from "../../Images/Appliance-repair-work-van-cropped.webp"
import car2 from "../../Images/Appliance-repair-work-van-cropped-2.webp"
import './City.css'
import { useParams } from 'react-router';


const CityPage = () => {
  let { cityName } = useParams();
  console.log(city_data[cityName]);
  if (city_data[cityName] === undefined) {
    return <NotFound />
  }
  const name = city_data[cityName]['name'];
  const name_upper = name.toUpperCase();
  return <div class="city-page-container">
    <div class="city-photo-container">
      <img loading="lazy" class="city-photo" src={city_data[cityName].photo} alt="City skyline"/>
      <div className="overlay"><h1 class="city-header">APPLIANCE REPAIR IN {name_upper}</h1></div>
    </div>
    <div class="city-text">
      <h2>Trusted Appliance Repair for Your Home in {name}</h2>
      <p>Choose Major Appliance Repair for your appliance repair in {name}. Contact us to discuss refrigerator repair, oven repair, dishwasher , washer repair, dryer repair, and more. Whatever issues you’re having with your appliance, we’re confident that our technicians have the knowledge, skill, and training to get it working like new again. Schedule your appliance repair visit today!
      </p>
      <h2>Our Appliance Repair Services</h2>
      <p>Refrigerator Repair: Keep your food fresh and safe with our refrigerator repair services. We fix issues like cooling problems, water leaks, and malfunctioning ice makers promptly.</p>
      <p>Washer and Dryer Repair: Don't let laundry pile up due to a faulty washer or dryer. Our technicians can diagnose and repair issues such as drum problems, faulty motors, and electrical issues efficiently.</p>
      <p>Oven and Stove Repair: Get back to cooking your favorite meals without hassle. We specialize in repairing ovens and stoves, addressing issues like temperature inconsistencies, faulty igniters, and broken heating elements.</p>
      <p>Dishwasher Repair: Say goodbye to hand-washing dishes. Our dishwasher repair services cover common problems like draining issues, leaks, and malfunctioning controls.</p>
      <div class="van-photos">
        <img loading="lazy" src={car} alt="Appliance repair work van"></img>
        <img loading="lazy" src={car2} alt="Appliance repair work van"></img>
      </div>
      <h2>Why Choose Us?</h2>
      <p>Brand Expertise: Our technicians are well-versed in repairing appliances from leading brands such as Samsung, LG, Whirlpool, GE, and more. No matter the brand, we have the know-how to address any issue efficiently.</p>
      <p>Fast and Reliable Service: We understand the inconvenience of a malfunctioning appliance, which is why we prioritize quick response times and efficient repairs. Our goal is to get your appliance back up and running as soon as possible.</p>
      <p>Genuine Parts: We use only genuine replacement parts from trusted manufacturers, ensuring the quality and longevity of our repairs. You can trust that your appliance will be restored to its original condition with our parts.</p>
      <p>Transparent Pricing: We believe in honest and transparent pricing. You'll receive a clear and upfront estimate before any repair work begins, so you know exactly what to expect.</p>
      <p>Customer Satisfaction Guaranteed: Your satisfaction is our top priority. We strive to exceed your expectations with every repair, and we won't rest until you're completely satisfied with the results.</p>
    </div>
    <ServiceArea />
  </div>
};

export default CityPage;
