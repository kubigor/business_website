// This is HeroSection component, Main top section of website
import React from "react";
import styled from "styled-components"
import Kitchen from "../../Images/bosch-cocina.jpeg"
import { gsap } from "gsap";


const Background = styled.div`
display:flex;
background-image: url(${Kitchen});
background-size: no-repeat;
background-position: center;
background-size: cover;
justify-content:right;
width: 100vw;
height:90vh;
margin-bottom: 1rem;

@media only Screen and (max-width: 48em){
  background-position-x: -130px;
}
`

const Title = styled.div`
  position:absolute;
  font-weight: 600;
  color white;
  text-align: right;
  width: 60%;
  font-size: 5vw;
  right: 5%;
  bottom: 20%;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  
  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }
  
  div {
    opacity: 0;
    filter: blur(4px);
  }
  
  div:nth-child(1) {
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  div:nth-child(2) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  div:nth-child(3) {
    animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  @media only Screen and (max-width: 48em){
    text-align: center;
    font-size: 3rem;
    right: 0;
    width: 100%;
    bottom: 30%;
  }
`

const TopLayer = styled.div`
display:flex;
position:absolute;
transform: skew(-30deg);
height: 90%;
width: 80%;
right: -15%;
background: linear-gradient(270deg, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0)) ;
backdrop-filter: blur(1px);
align-items: center;
padding: 3rem;

@media only Screen and (max-width: 48em){
  background: rgba(0,0,0,0.6);
  transform: skew(0);
  width: 100%;
  right: 0;
}
`

const HeroSection = () => {
  return <Background>
      <TopLayer>
      </TopLayer>
        <Title>
          <div><p class="text1">Fast in-home</p></div>
          <div><p class="text2">appliance repairs</p></div>
          <div><p class="text3">by certified experts</p></div>
        </Title>
    </Background>;
};

export default HeroSection;
