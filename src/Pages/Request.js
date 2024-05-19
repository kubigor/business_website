//This is home page, It will contains all the sections require in this page.
import Contact from '../Sections/Contact'
import React from 'react'
import { Helmet } from 'react-helmet';
import './PagesStyle.css'


const Request = () => {
  const jsonLD = `{
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "image": "https://majorappliancerepair.info/static/media/Major-appliance-repair-logo.98af444363f3cf073d0c.webp",
    "@id": "https://majorappliancerepair.info/",
    "url": "https://majorappliancerepair.info/"
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
  return <div id="request" >
      <Helmet>
        <script type="application/ld+json">{jsonLD}</script>
        <title>Request Repair</title>
        <meta name="description" content="Professional appliance repair services for a wide range of major appliances, such as refrigerators, washing machines, dryers, dishwashers, and more." />
        <link rel="canonical" href="https://majorappliancerepair.info/request/"></link>
      </Helmet>
      <Contact />
      <iframe title = "location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d282517.40931547293!2d-122.36461102497174!3d47.66482695510196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549007315f4d880f%3A0x3480d761c45eca0d!2sMajor%20Appliance%20Repair!5e0!3m2!1sen!2sus!4v1698993141190!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>;
};

export default Request;
