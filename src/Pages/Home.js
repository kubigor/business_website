//This is home page, It will contains all the sections require in this page.
import HeroSection from '../Sections/Hero'
import Steps from '../Sections/Steps'
import Testimonials from '../Sections/Testimonials'
import Contact from '../Sections/Contact'
import Divider from '../Sections/Divider'
import styled from 'styled-components'
import React from 'react'
import Brands from '../Sections/Brands'
import Charges from '../Sections/Charges'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
aligh-items: center;
background-color: var(--peach);
`


const Home = () => {
  return <Container > 
      <HeroSection />
      <Steps />
      <Testimonials />
      <Brands />
      <Divider />
      <Charges />
      <Contact />
    </Container>
;
};

export default Home;
