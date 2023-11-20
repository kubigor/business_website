import React from 'react'
import Hours from '../Sections/Hours';
import Reviews from '../Sections/Reviews';
import AboutSection from '../Sections/AboutSection'
import './PagesStyle.css'


const About = () => {
  return <div id="about" > 
    <AboutSection />
    <Hours />
    <Reviews />
    </div>;
};

export default About;
