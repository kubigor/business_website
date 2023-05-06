// This is About component, It will contain about us info.
import React from "react";
import styled from "styled-components";
import backImage from "/home/kubigor/react/Agency-website/src/MySite/Used/Image-10-1170x475.jpg"

const Container = styled.div`
background-image: url("/Agency-website/src/MySite/Used/Image-10-1170x475.jpg");
background-position: center;
// background-color: black;
display: flex;
flex-direction: column;
justify-conten: center;
align-items: center;
width: auto;
height: auto;
padding: 2rem 0 2rem 0;
color: white;

@media only Screen and (max-width: 48em){
  h1{
    font-size: 1.5rem;
  }
  h5{
    font-size: 2rem;
  }
  

}
`

const Steps = styled.div`
display: flex;
justify-conten: center;
align-items: center;



`

const Step = styled.div`
display: flex;
flex-direction: column;
margin: 2%;
justify-conten: center;

p{
  font-size: 13px;
  text-align: center;
}

span{
  text-align: center;
}

h3{
  font-size: 15px;
  text-align: center;
}

@media only Screen and (max-width: 48em){
  p{
    font-size: 0;
  }
  margin-top: 2rem;
}
`

const About = () => {
  return <Container>
    <h5>How we work</h5>
    <h1>Step-by-step repair proces</h1>
  <Steps>
    <Step><h3>Breakdown analysis</h3>
    <span>STEP 1</span>
<p>We will contact you within 30 minutes and listen to your problem.</p></Step>
    <Step><h3>Departure of master</h3>
    <span>STEP 2</span>
<p>Our specialist will come to you and make a detailed diagnosis.</p></Step>
    <Step><h3>Repair of appliance</h3>
    <span>STEP 3</span>
<p>The master will perform the necessary repairs right in your home.</p></Step>
    <Step><h3>Issuing a guarantee</h3>
    <span>STEP 4</span>
<p>After the repair is completed, you will receive a warranty.</p></Step>
  </Steps>
  </Container>
};

export default About;
