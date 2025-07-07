import HeroSection from '../Sections/Hero'
import Zipper from "../Sections/Zipper"
import Steps from '../Sections/Steps'
import Description from '../Sections/Description'
import Divider from '../Sections/Divider'
import Charges from '../Sections/Charges'
import ServiceArea from '../Sections/ServiceArea'
import Slides from '../Sections/Slides'
import React from 'react'
import { Helmet } from 'react-helmet';
import './PagesStyle.css'


const Home = () => {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "image": "https://majorappliancerepair.info/static/media/Major-appliance-repair-logo.98af444363f3cf073d0c.webp",
    "@id": "https://majorappliancerepair.info/",
    "url": "https://majorappliancerepair.info/",
    "telephone": "+14253646644",
    "name": "Major Appliance Repair",
    "description": "Expert repair services for major appliances including refrigerators, washing machines, dryers, dishwashers, and more.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10961 NE 2ND PL",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/major.repairing",
      "https://www.yelp.com/biz/major-appliance-repair-bellevue-4"
    ],
    "priceRange": "$200-$500",
    "department": [
      {
        "@type": "Service",
        "name": "Refrigerator Repair",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10961 NE 2ND PL",
          "addressLocality": "Bellevue",
          "addressRegion": "WA",
          "postalCode": "98004",
          "addressCountry": "US"
        },
        "url": "https://majorappliancerepair.info/services/refrigerator-repair/"
      },
      {
        "@type": "Service",
        "name": "Range and Oven Repair",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10961 NE 2ND PL",
          "addressLocality": "Bellevue",
          "addressRegion": "WA",
          "postalCode": "98004",
          "addressCountry": "US"
        },
        "url": "https://majorappliancerepair.info/services/range-repair/"
      },
      {
        "@type": "Service",
        "name": "Cooktop Repair",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10961 NE 2ND PL",
          "addressLocality": "Bellevue",
          "addressRegion": "WA",
          "postalCode": "98004",
          "addressCountry": "US"
        },
        "url": "https://majorappliancerepair.info/services/cooktop-repair/"
      },
      {
        "@type": "Service",
        "name": "Washer Repair",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10961 NE 2ND PL",
          "addressLocality": "Bellevue",
          "addressRegion": "WA",
          "postalCode": "98004",
          "addressCountry": "US"
        },
        "url": "https://majorappliancerepair.info/services/washer-repair/"
      },
      {
        "@type": "Service",
        "name": "Dryer Repair",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10961 NE 2ND PL",
          "addressLocality": "Bellevue",
          "addressRegion": "WA",
          "postalCode": "98004",
          "addressCountry": "US"
        },
        "url": "https://majorappliancerepair.info/services/dryer-repair/"
      },
      {
        "@type": "Service",
        "name": "Dishwasher Repair",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10961 NE 2ND PL",
          "addressLocality": "Bellevue",
          "addressRegion": "WA",
          "postalCode": "98004",
          "addressCountry": "US"
        },
        "url": "https://majorappliancerepair.info/services/dishwasher-repair/"
      }
    ],
    "areaServed": {
      "@type": "State",
      "name": "Washington"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "89"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Judy Pearson"
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
          "name": "Mike Miller"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Quick response and fair pricing."
      }
    ]
  }
  const jsonLdString = JSON.stringify(jsonLD);

  return <div id="home" >
      <Helmet>
        <script type="application/ld+json">{jsonLdString}</script>
        <title>Major Appliance Repair in the Greater Seattle Area</title>
        <meta name="description" content="Professional appliance repair services for a wide range of major appliances, such as refrigerators, washing machines, dryers, dishwashers, and more." />
        <link rel="canonical" href="https://majorappliancerepair.info/"></link>
        <link rel="preload" href="/static/media/bosch-kitchen-appliances.efccf23dffcb896d5784.webp" as="image" />
        <link rel="preload" href="/static/media/Appliance-repair-work-car-cropped.597c9f0fec60c33dc079.webp" as="image" />
        <link rel="preload" href="/static/media/Appliance-repair-work-car.ab42dbe59310ca8bcf0a.webp" as="image" />
      </Helmet>
      <HeroSection />
      <Steps />
      <Zipper />
      <Description />
      <Divider />
      <Slides />
      <ServiceArea />
      <Charges />
    </div>
;
};

export default Home;
