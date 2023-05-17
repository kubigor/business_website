//This is home page, It will contains all the sections require in this page.
import Steps from '../Sections/Steps'
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

const Services = () => {
  return<Container >
      <Steps />
      <Charges />
      <Divider />
      <Brands />
    </Container>;
};

export default Services;
