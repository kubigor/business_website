import HeroSection from '../Sections/Hero'
import Zipper from "../Sections/Zipper"
import Steps from '../Sections/Steps'
import Description from '../Sections/Description'
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
      {/* <Description /> */}
      <Charges />
      <Contact />
    </div>
;
};

export default Home;
