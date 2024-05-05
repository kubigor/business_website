import React from 'react'
import Hours from '../Sections/Hours';
import Reviews from '../Sections/Reviews';
import AboutSection from '../Sections/AboutSection'
import Charges from '../Sections/Charges'
import Brands from '../Sections/Brands'
import ServiceArea from '../Sections/ServiceArea';
import { Helmet } from 'react-helmet';
import './PagesStyle.css'


const About = () => {
  const jsonLD = `{
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Major Appliance Repair",
    "headline": "Appliance Repair Near Me",
    "description": "Expert repair services for major appliances including refrigerators, washing machines, dryers, dishwashers, and more.",
    "datePublished": "2021-04-07",
    "dateModified": "2024-04-25",
    "telephone": "+14253646644",
    "priceRange": "$200-$500",
    "openingHours": "Mo-Fr 09:00-17:00",
    "telephone": "+14253646644",
    "priceRange": "$200-$500",
    "openingHours": "Mo-Fr 09:00-17:00",
    "image": "/static/media/Major-appliance-repair-logo.98af444363f3cf073d0c.webp",
    "url": "https://majorappliancerepair.info/"
  }`
  return <div id="about" > 
      <Helmet>
        <script type="application/ld+json">{jsonLD}</script>
        <title>About Major Appliance Repair</title>
        <meta name="description" content="Professional appliance repair services for a wide range of major appliances, such as refrigerators, washing machines, dryers, dishwashers, and more." />
        <link rel="canonical" href="https://majorappliancerepair.info/about"></link>
        <link rel="preload" href="/static/media/bosch-kitchen-appliances.efccf23dffcb896d5784.webp" as="image" />
      </Helmet>
    <AboutSection />
    <Brands />
    <ServiceArea />
    <Charges />
    <Reviews />
    <Hours />
    </div>;
};

export default About;
