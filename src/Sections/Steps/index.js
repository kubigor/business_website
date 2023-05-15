// This is About component, It will contain about us info.
import React from "react";
import styled from "styled-components";
import Background from "../../Images/Image-10-1170x475.jpg";

const Container = styled.div`
color: white;
display: flex;
flex-direction: column;
justify-conten: center;
align-items: center;
width: auto;
height: auto;
padding: 2rem 0 2rem 0;
position: relative;
background: url(${Background});


img{
    opacity: 0.75;
    position: absolute;
    min-width: 100vw;
    z-index: -19;
    top: 0px;
    
    
    
}
@media only Screen and (max-width: 48em){
  h1{
    font-size: 1.5rem;
  }
  h5{
    font-size: 2rem;
  }
  img{
    height: 35vh;
  }
}
`

const Step_box = styled.div`
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

const Steps = () => {
  return <Container>
    <h5>How we work</h5>
    <h1>Step-by-step repair proces</h1>
  <Step_box>
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
  </Step_box>
  </Container>
};

export default Steps;
