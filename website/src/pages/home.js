import HeroSection from '../sections/Hero'
import Zipper from "../sections/Zipper"
import Steps from '../sections/Steps'
import Description from '../sections/Description'
import Divider from '../sections/Divider'
import Charges from '../sections/Charges'
import Contact from '../sections/Contact'
import React from 'react'
import './PagesStyle.css'


const Home = () => {
  return <div id="home" > 
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
