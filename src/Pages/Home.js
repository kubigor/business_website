//This is home page, It will contains all the sections require in this page.
import HeroSection from '../Sections/Hero'
import Zipper from "../Sections/Zipper"
import Steps from '../Sections/Steps'
import Brands from '../Sections/Brands'
import Divider from '../Sections/Divider'
import Charges from '../Sections/Charges'
import Contact from '../Sections/Contact'
import Test from '../Sections/Test'
import React from 'react'
import './PagesStyle.css'


const Home = () => {
  return <div id="home" > 
      <HeroSection />
      <Steps />
      <Zipper />
      <Brands />
      <Divider />
      <Charges />
      <Contact />
    </div>
;
};

export default Home;
