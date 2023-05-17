//This is home page, It will contains all the sections require in this page.
import Contact from '../Sections/Contact'
import styled from 'styled-components'
import React from 'react'


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
aligh-items: center;
background-color: var(--peach);

iframe{
  border: none;
  height: 80vh;
}
`



const Request = () => {
  return <Container > 
      <Contact />
      <iframe title = "location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181059.65840277984!2d-122.37504506178115!3d47.8763649733226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549007315f4d880f%3A0x3480d761c45eca0d!2sMajor%20Appliance%20Repair!5e0!3m2!1sen!2sus!4v1684107606042!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </Container>;
};

export default Request;
