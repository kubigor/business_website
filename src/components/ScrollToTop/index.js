// This is ScrollToTop component, To scroll from anywhere to top
import React from "react";
import styled from "styled-components";
import arrows from "../../Images/black-up-arrow-png-6.png"

const Up = styled.div`
position: fixed;
right: 2.5rem;
bottom: 2.5rem;
border-radius: 0px;
opacity: 0.5;
background-image: radial-gradient(circle, rgb(218, 218, 218, 1) 0%, rgb(218, 218, 218, 1) 60%, rgba(218, 218, 218,0) 70%);


&:hover{
  opacity: 0.7;
}

img{
  padding: 16px;
  width:4rem;
  height:4rem; 
  cursor:pointer;
}
`

const ScrollToTop = () => {

  const ScrollUp = () => {
    const element = document.getElementById("home");
    element.scrollIntoView({
      behavior:"smooth",
      block:"end",
      inline:"nearest"
    })
  }

  return <Up onClick={()=> ScrollUp() }>
    <img src={arrows} alt="to top" />
  </Up>;
};

export default ScrollToTop;
