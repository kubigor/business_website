import HeroSection from '../Sections/Hero'
import Zipper from "../Sections/Zipper"
import Steps from '../Sections/Steps'
import Description from '../Sections/Description'
import Divider from '../Sections/Divider'
import Charges from '../Sections/Charges'
import ServiceArea from '../Sections/ServiceArea'
import React from 'react'
import { Helmet } from 'react-helmet';
import './PagesStyle.css'


const Home = () => {
  const jsonLD = `{
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "image": "https://majorappliancerepair.info/static/media/Major-appliance-repair-logo.98af444363f3cf073d0c.webp",
    "@id": "https://majorappliancerepair.info/",
    "url": "https://majorappliancerepair.info/",
    "telephone": "+14253646644",
    "name": "Major Appliance Repair",
    "description": "Expert repair services for major appliances including refrigerators, washing machines, dryers, dishwashers, and more.",
    "datePublished": "2021-04-07",
    "dateModified": "2024-04-25",
    "address": {
      "streetAddress": "10961 NE 2ND PL"
      "@type": "PostalAddress",
      "addressLocality": "Bellevue",
      "addressRegion": "WA",
      "postalCode": "98004",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.61226169032108,
      "longitude": -122.19465064165706
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/major.repairing",
      "https://www.linkedin.com/in/major.repairing/",
      "https://www.yelp.com/biz/major-appliance-repair-bellevue-4",
    ],
    "priceRange": "$200-$500",
    "department": [
      {
        "@type": "LocalBusiness",
        "name": "Refrigerator Repair",
        "url": "https://majorappliancerepair.info/services/refrigerator/"
      },      {
        "@type": "LocalBusiness",
        "name": "Range and Oven repair",
        "url": "https://majorappliancerepair.info/services/range/"
      },      {
        "@type": "LocalBusiness",
        "name": "Cooktop Repair",
        "url": "https://majorappliancerepair.info/services/cooktop/"
      },      {
        "@type": "LocalBusiness",
        "name": "Washer Repair",
        "url": "https://majorappliancerepair.info/services/washer/"
      },      {
        "@type": "LocalBusiness",
        "name": "Dryer Repair",
        "url": "https://majorappliancerepair.info/services/dryer/"
      },
      {
        "@type": "LocalBusiness",
        "name": "Dishwasher Repair",
        "url": "https://majorappliancerepair.info/services/dishwasher/"
      }
    ],

    "areaServed": {
      "@type": "State",
      "name": "Washington"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "53"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jane Doe"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Excellent service and very professional!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "John Smith"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Quick response and fair pricing."
      }
    ],
    "potentialAction": {
      "@type": "Service",
      "serviceType": "Appliance repair",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Major Appliance Repair"
      }
    }
  }`
  return <div id="home" >
      <Helmet>
        <script type="application/ld+json">{jsonLD}</script>
        <title>Major Appliance Repair in the Greater Seattle Area</title>
        <meta name="description" content="Professional appliance repair services for a wide range of major appliances, such as refrigerators, washing machines, dryers, dishwashers, and more" />
        <link rel="canonical" href="https://majorappliancerepair.info/"></link>
        <link rel="preload" href="/static/media/bosch-kitchen-appliances.efccf23dffcb896d5784.webp" as="image" />
        <link rel="preload" href="/static/media/Appliance-repair-work-car-cropped.7878f6e4d0ad7891586e.webp" as="image" />
      </Helmet>
      <HeroSection />
      <Steps />
      <Zipper />
      <Description />
      <Divider />
      <ServiceArea />
      <Charges />
    </div>
;
};

export default Home;
