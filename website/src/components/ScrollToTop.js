import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo" ;
import arrows from "../images/black-up-arrow.webp"
import { ScrollUp } from "./ScrollUp";
import "./ScrollToTop.css"

const ScrollToTop = () => {
  return <div id="scroll" onClick={ScrollUp}>
    <img loading="lazy" src={arrows} alt="go to top" draggable="false"/>
  </div>;
};

export default ScrollToTop;
