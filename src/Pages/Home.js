//This is home page, It will contains all the sections require in this page.
import HeroSection from '../Sections/Hero'
import About from '../Sections/About'
import Services from '../Sections/Services'
import Testimonials from '../Sections/Testimonials'
import Contact from '../Sections/Contact'
import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
aligh-items: center;
`


const Home = () => {
  return <div>
    <Container > 
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </Container>
  </div>;
};

export default Home;
