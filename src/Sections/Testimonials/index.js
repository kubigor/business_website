// This is Testimonials component
import React from "react";
import styled from "styled-components";
import Background from "../../Images/Image-3-1-1-1100x750.jpg"
import Slider from "react-slick";
import Card from "../../components/Card";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

const Box = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
background: url(${Background});
background-repeat:no-repeat;
background-size: 60%; 
background-position: left;
padding: 2rem 2rem 2rem 0;
margin: 1rem 0 1rem 0;

@media only Screen and (max-width: 48em){
  background-size: 0;
  padding: 0;
}

`

const Section = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color: #DADADA;
width: 60%;
height: 34vh;
opacity:0.9;
border-radius: 10px;

@media only Screen and (max-width: 48em){
  width: 100%;
  height: 40vh;
}
`

const Title = styled.h1`
display: inline-block;
font-size: calc(2vw);
margin-top: 2.5rem;
position: relative;
color: white;
text-shadow: 0 0 5px black, 0 0 5px black;

@media only Screen and (max-width: 48em){
  font-size: 2rem;
  margin-top: 0;
}

&::before {
  content: '';
  height: 1px;
  width: 50%;
  position: absolute; 
  left: 50%;
  bottom: 0;
  border-bottom: 2px solid var(--pink)
  transform: translate(-50%);
}
`
const Carousal = styled.div`
width:85%;
display: flex;
flex-direction: column;
justify-content: center;
position: block;

.slick-arrow:before{
  color: navy;
  
  @media only Screen and (max-width: 48em){
    display:none;
  
  }
}

`
const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return <Box>
    <Section>
      <Title>Happy customers!</Title>
      <Carousal>
        <Slider {...settings}>
            <Card
                text="I want to say a huge thank you to specialist Igor. He Quickly arrived, examined my refrigerator in detail, and professionally performed repairs. In the process, he was very neat, polite and punctual. Upon completion of the repair, I was issued a warranty receipt for a new spare part. I am very happy!"
                name="Emma Bellucci"
                image="Image-3"
            />
            <Card
                text="Very responsive from the start.  I reached out on Friday when my dryer broke, by the end of the day they gave me a reasonable quote and ordered the part I needed.  The part came in by Monday, and we scheduled them to come out on Wednesday.  Igor came right on schedule and was finished in the estimated time."
                name="Chelsea P"
                image="Image-4"
            />
          </Slider>
      </Carousal>
    </Section>
  </Box>;
};

export default Testimonials;
