import HeroSection from '../Sections/Hero'
import Zipper from "../Sections/Zipper"
import Steps from '../Sections/Steps'
import Description from '../Sections/Description'
import Divider from '../Sections/Divider'
import Charges from '../Sections/Charges'
import Contact from '../Sections/Contact'
import React from 'react'
import { Helmet } from 'react-helmet';
import './PagesStyle.css'


const Home = () => {
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
  return <div id="home" >
      <Helmet>
        <script type="application/ld+json">{jsonLD}</script>
        <title>Major Appliance Repair</title>
        <meta name="description" content="Professional appliance repair services for a wide range of major appliances, such as refrigerators, washing machines, dryers, dishwashers, and more." />
        <link rel="canonical" href="https://majorappliancerepair.info/"></link>
        <link rel="preload" href="/static/media/bosch-kitchen-appliances.efccf23dffcb896d5784.webp" as="image" />
        <link rel="preload" href="/static/media/Appliance-repair-work-car-cropped.7878f6e4d0ad7891586e.webp" as="image" />
      </Helmet>
      <HeroSection />
      <Steps />
      <Zipper />
      <Description />
      <Divider />
      <Charges />
      <Contact />
    </div>
;
};

export default Home;
