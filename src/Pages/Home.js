import HeroSection from '../Sections/Hero'
import Zipper from "../Sections/Zipper"
import Steps from '../Sections/Steps'
import Brands from '../Sections/Brands'
import Divider from '../Sections/Divider'
import Charges from '../Sections/Charges'
import Contact from '../Sections/Contact'
import React from 'react'
import './PagesStyle.css'


const Home = () => {
  return <div id="home" > 
      <HeroSection />
      <Zipper />
      <Steps />
      <Divider />
      <Charges />
      <Contact />
      <Brands />
    </div>
;
};

export default Home;
