//This is home page, It will contains all the sections require in this page.
import Steps from '../Sections/Steps'
import Testimonials from '../Sections/Testimonials'
import React from 'react'
import Charges from '../Sections/Charges'
import './PagesStyle.css'


const About = () => {
  return <div id="about" > 
      {/* <Testimonials /> */}
      <Steps />
      <Charges />
    </div>;
};

export default About;
