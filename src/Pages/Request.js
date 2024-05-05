//This is home page, It will contains all the sections require in this page.
import Contact from '../Sections/Contact'
import React from 'react'
import { Helmet } from 'react-helmet';
import './PagesStyle.css'


const Request = () => {
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
  return <div id="request" >
      <Helmet>
        <script type="application/ld+json">{jsonLD}</script>
        <title>Request Repair</title>
        <meta name="description" content="Professional appliance repair services for a wide range of major appliances, such as refrigerators, washing machines, dryers, dishwashers, and more." />
        <link rel="canonical" href="https://majorappliancerepair.info/request"></link>
        <link rel="preload" href="/static/media/bosch-kitchen-appliances.efccf23dffcb896d5784.webp" as="image" />
      </Helmet>
      <Contact />
      <iframe title = "location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d282517.40931547293!2d-122.36461102497174!3d47.66482695510196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549007315f4d880f%3A0x3480d761c45eca0d!2sMajor%20Appliance%20Repair!5e0!3m2!1sen!2sus!4v1698993141190!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>;
};

export default Request;
