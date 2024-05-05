import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hours from '../sections/Hours';
import Reviews from '../sections/Reviews';
import AboutSection from '../sections/AboutSection'
import Charges from '../sections/Charges'
import Brands from '../sections/Brands'
import ServiceArea from '../sections/ServiceArea';

import './PagesStyle.css'


const About = () => {
  return <div id="about" >
    <Layout>
      <AboutSection />
      <Brands />
      <ServiceArea />
      <Charges />
      <Reviews />
      <Hours />
    </Layout>
    </div>;
};

export default About;
