// This is About component, It will contain about us info.
import React from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
justify-content: center;
margin: 3rem;
column-gap: 3rem;

@media only Screen and (max-width: 48em){
  flex-direction: column;
  row-gap: 3rem;
}

`

const Box = styled.div`
display:flex;
background-color: white;
border: 2px solid navy;
border-radius: 15px;
padding: 2rem;
flex-direction: column;
width: 35%;

p{
  font-size: 0.8rem;
}

h3{
  text-align: center;
  margin-bottom: 1rem;
}

@media only Screen and (max-width: 48em){
  width: 100%;
}
`

const Charges = () => {
  return (<Container>
  <Box>
    <h3>Our Rates</h3>
    <p>Our initial appliance repair <b>service call</b> charge is $100. <br/>

    Once we’ve diagnosed what’s causing the problem, we’ll provide you with a full service quote. If you decide to accept it, your service call charge will be applied toward the cost of the repair.</p>
  </Box>
  <Box>
    <h3>The visit</h3>
    <p>Our technician will arrive in a vehicle stocked with a common replacement parts. Our goal is to fix the problem in just one visit. <br/>
    After repair we issue a warranty which depends on the type of repair provided but is matched to the market (as the prices are). </p>
  </Box>
</ Container>
)};
export default Charges;
