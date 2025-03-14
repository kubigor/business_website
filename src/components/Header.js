import React, { useState } from "react";
import { Link } from 'react-router-dom';
import HousecallProButton from './HouseCall'
import logo from '../Images/Major-appliance-repair-logo.webp'
import menu from "../Images/menu-img.webp"
import "./Header.css"

const Header = () => {

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    let mobileMenu = document.getElementById("menu-mobile");
    let mobileMenuButtons = document.getElementById("menu-mobile-buttons");
    let mobileMenuOpener = document.getElementById("img-menu-opener");

    if (visible) {
      mobileMenu.style.visibility = "hidden";
      document.body.style.position = "relative";
      mobileMenuButtons.style.right = "80vw";
      mobileMenuOpener.style.rotate = "0deg";
    } else {
      mobileMenu.style.visibility = "visible";
      document.body.style.position = "fixed";
      mobileMenuButtons.style.right = "0";
      mobileMenuOpener.style.rotate = "90deg";
    }
    setVisible(!visible);
  }

  return (
  <div id="menu">
    <Link to ="/" id="link-logo"><img loading="lazy" src={logo} alt="Company logo" className="logo-link" /></Link>
    <div id="menu-buttons">
      <Link to ="/">Home</Link>
      <a href="https://majorappliancerepair.info/about/">About</a>
      <a href="https://majorappliancerepair.info/services/">Services</a>
      <a href="https://majorappliancerepair.info/high-ends/">High-ends</a>    
      <HousecallProButton />
      <a href="https://majorappliancerepair.info/request/" className="btn-bright">Request Service</a>    
    </div>
    <img loading="lazy" id="img-menu-opener" src={menu} alt="menu pic" onClick={() => handleClick()}/>
    <div id="menu-mobile" onClick={() => handleClick()}>
      <div id="menu-mobile-buttons">
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/services">Services</Link>
        <Link to ="/high-ends">High-ends</Link>    
        <a href="https://book.housecallpro.com/book/Major-Appliance-Repair/ef8a37880ad64305aaaee491dd1fc976?v2=true">Book Online</a>
        <Link to ="/request">Request Service</Link>
        <Link to ="/terms-of-service/">Terms And Conditions</Link>
        <br/>
        <br/>
        <a href="https://www.google.com/maps/place/Major+Appliance+Repair/@47.642346,-122.2022255,10z/data=!4m6!3m5!1s0x549007315f4d880f:0x3480d761c45eca0d!8m2!3d47.642346!4d-122.2022255!16s%2Fg%2F11q95dzh93?entry=ttu">Google profile!</a>
        <a href="https://www.yelp.com/biz/major-appliance-repair-bellevue-4">Yelp profile!</a>
      </div>
    </div>
  </div>
  )
};

export default Header;
