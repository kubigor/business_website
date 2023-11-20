import React from "react";
import arrows from "../Images/black-up-arrow.png"
import "./ScrollToTop.css"

const ScrollToTop = () => {

  function ScrollUp() {
    const element = document.getElementById('menu');
    element.scrollIntoView({
      behavior:"smooth",
      block:"end",
      inline:"nearest"
    })
  }

  return <div id="scroll" onClick={ScrollUp}>
    <img src={arrows} alt="go to top" draggable="false"/>
  </div>;
};

export default ScrollToTop;
