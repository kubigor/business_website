// This is HeroSection component, Main top section of website
import React from "react";
import styled from "styled-components"
import Pink from "../../assets/blobPink.png"


const HerosSection = styled.div`
width:100vw;
height:25vw;
background-color: black;
display:flex;
justify-content:center;
`
const Blobs = styled.div`
`
const PinkBlob = styled.div`
`
const WhiteBlob = styled.div`
`
const PurpleBlob = styled.div`
`
const HeroSection = () => {
  return <HerosSection>
    <PinkBlob>
      {/* <img src={Pink} alt="PinkBlob" width="400"/> */}
    </PinkBlob>
    <WhiteBlob>
      
    </WhiteBlob>
    <PurpleBlob>
      
    </PurpleBlob>
    
    Hero Section</HerosSection>;
};

export default HeroSection;
