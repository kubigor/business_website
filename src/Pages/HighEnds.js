import React from 'react'
import HighendGallery from '../Sections/HighendGallery';
import HighendAddon from '../Sections/HighendAddon';
import { Helmet } from 'react-helmet';
import './HighEnds.css'

const HighEnds = () => {
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
  return <div id="highend-container" >
      <Helmet>
        <script type="application/ld+json">{jsonLD}</script>
        <title>High End Appliance Repair</title>
        <meta name="description" content="Professional appliance repair services for a wide range of major appliances, such as refrigerators, washing machines, dryers, dishwashers, and more." />
        <link rel="canonical" href="https://majorappliancerepair.info/high-ends"></link>
      </Helmet>
      <HighendGallery id="first-section"/>
      <HighendAddon id="second-section"/>
    </div>
};

export default HighEnds;
