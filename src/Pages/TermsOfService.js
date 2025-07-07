//This is home page, It will contains all the sections require in this page.
import React from 'react'
import Terms from '../Sections/Terms'
import { Helmet } from 'react-helmet';
import './PagesStyle.css'


const TermsOfService = () => {
  const jsonLD = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Major Appliance Repair",
    "headline": "Appliance Repair Near Me",
    "description": "Expert repair services for major appliances including refrigerators, washing machines, dryers, dishwashers, and more.",
    "datePublished": "2021-04-07",
    "dateModified": "2024-04-25",
    "priceRange": "$200-$500",
    "openingHours": "Mo-Fr 09:00-17:00",
    "telephone": "+14253646644",
    "image": "/static/media/Major-appliance-repair-logo.98af444363f3cf073d0c.webp",
    "url": "https://majorappliancerepair.info/terms-of-service/"
  }
  const jsonLdString = JSON.stringify(jsonLD);
  
  return <div id="terms-of-service" >
      <Helmet>
        <script type="application/ld+json">{jsonLdString}</script>
        <title>Terms Of Service</title>
        <meta name="description" content="Fast and reliable appliance repair for refrigerators, dishwashers, washers, dryers, and more. Trusted professionals ready to help!" />
        <link rel="canonical" href="https://majorappliancerepair.info/terms-of-service/"></link>
      </Helmet>
      <Terms />
    </div>
;
};

export default TermsOfService;
