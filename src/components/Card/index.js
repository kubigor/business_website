//This is card component for Testimonials
import React from "react";
import styled from "styled-components";


const CARD = styled.div`
font-size: 12px;
display: flex;
flex-direction: column;
justify-content: center;

margin: 0 1.5rem 1.5rem 1.5rem;
position:relative;
height: 24vh;

`
const Image = styled.div`
width: 5rem;
height: 5rem;
background: url(${(props) => props.img});
background-repeat:no-repeat;
background-size: contain; 
position: absolute;
right: 5%;
bottom: -24px;
margin-top: 2rem;

@media only Screen and (max-width: 48em){
  background: none;
}

`
const Text = styled.h4`
font-size: 1rem;
font-weight: 500;

@media only Screen and (max-width: 48em){
  font-size: 0.9rem;
}
`
const Name = styled.h3`
@media only Screen and (max-width: 48em){
  position: absolute;
  right: -1rem;
  bottom: -1.5rem;
}
`

const Card = ({name, text, image}) => {
  const Photo = require(`../../Images/${image}.png`).default;
  return <CARD>
    <Text>{text}</Text>
    <Name>{name}</Name>
    <Image img={Photo} width="400" height="400" />
  </CARD>
};

export default Card;
