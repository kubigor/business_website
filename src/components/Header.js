// This is Header component /Navigation Component
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../Images/Major-appliance-repair-logo.png'
import menu from "../Images/menu-img.png"
import "./Header.css"

const Header = () => {

  const [clicked, setclicked] = useState(false);
  const handleClick = () => {
    let mobileMenu = document.getElementById("menu-mobile");
    clicked ? mobileMenu.style.visibility = "hidden" : mobileMenu.style.visibility = "visible";
    setclicked(!clicked);
    }

  return (
  <div id="menu">
    <a class="logo-link">
      <Link to ="/"><img src={logo} alt="logo" /></Link>
    </a>
    <div id="menu-buttons">
      <Link to ="/">Home</Link>
      <Link to ="/about">About</Link>
      <Link to ="/services">Services</Link>
      <Link to ="/portfolio">Portfolio</Link>
      <Link to ="/request">
        <button class="btn-bright">Request Service</button>
      </Link>
    </div>
    <img id="img-menu-opener" src={menu} onClick={() => handleClick()}/>
    <div id="menu-mobile">
      <Link to ="/" onClick={() => handleClick() }>Home</Link>
      <Link to ="/about" onClick={() => handleClick() }>About</Link>
      <Link to ="/services" onClick={() => handleClick() }>Services</Link>
      <Link to ="/request" onClick={() => handleClick() }>
        <button class="btn-bright">Request Service</button>
      </Link>
    </div>
    </div>
  )
};

export default Header;
