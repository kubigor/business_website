import React from 'react'
import Hours from '../Sections/Hours';
import Reviews from '../Sections/Reviews';
import AboutSection from '../Sections/AboutSection'
import Charges from '../Sections/Charges'
import Brands from '../Sections/Brands'


import './PagesStyle.css'


const About = () => {
  return <div id="about" > 
    <AboutSection />
    <Brands />
    <Charges />
    <Reviews />
    <Hours />
    </div>;
};

export default About;
