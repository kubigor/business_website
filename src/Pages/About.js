//This is home page, It will contains all the sections require in this page.
import Steps from '../Sections/Steps'
import Testimonials from '../Sections/Testimonials'
import styled from 'styled-components'
import React from 'react'
import Charges from '../Sections/Charges'


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
aligh-items: center;
background-color: var(--peach);
`

const About = () => {
  return <Container > 
      <Testimonials />
      <Steps />
      <Charges />
    </Container>;
};

export default About;
