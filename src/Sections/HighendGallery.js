import React, {useEffect} from 'react'
import subzero from "../Images/appliances/subzero-fridge.webp";
import viking from "../Images/appliances/viking-fridge.webp";
import monogram from "../Images/appliances/monogram-fridge.webp";
import liebherr from "../Images/appliances/liebherr-fridge.webp";
import './HighendGallery.css'

const HighendGallery = () => {
  useEffect(() => {
    const shade = document.getElementById('first-section-shade');
    const menuHeight = document.getElementById('menu').clientHeight;
    const types = document.getElementById('types');
    const background = document.getElementById('first-section-background');
    const text = document.getElementById('first-section-text');
    
    window.scrollTo({
      top: menuHeight,
      behavior: "instant",
    });
    shade.style.opacity = '.55';
    types.style.bottom = "0";
    text.style.opacity= "1";
    types.addEventListener('click', (e) => {
      let newBackground = "../../Images/appliances/sub-zero-kitchen.webp";
      let newText = "Expert Care for Your High-End Appliances"
      let newXPos = '';
      let newYPos ='';
      switch (e.target.innerText) {
        case 'Sub Zero': 
          newBackground = subzero;
          newText= "Specialized Care for High-End Appliances";
          newXPos = "25%";
          newYPos ="70%";
          break;
        case 'Monogram': 
          newBackground = monogram;
          newText= "Attention to Detail, Perfection in Every Repair";
          newXPos = "30%";
          newYPos ="60%";
          break;
        case 'Liebherr': 
          newBackground = liebherr;
          newText= "Bringing Elite Appliances Back to Life";
          newXPos = "35%";
          newYPos = "50%";
          break;
        case 'Viking': 
          newBackground = viking;
          newText= "Where Every Detail Counts";
          newXPos = "40%";
          newYPos = "40%";
          break;
        default:
        }
      text.style.transition= ".7s";
      text.style.backgroundColor= "rgba(0, 0, 0, 0.6)"
      text.style.boxShadow= "0 0 4px 1.4rem rgba(0, 0, 0, 0.6)"
      text.style.opacity = "0"
      shade.style.opacity= "1";
      shade.style.transition= ".7s";
      background.style.transitionDelay= ".7s";
      background.style.backgroundImage = `url(${newBackground})`
      if (window.innerWidth >= 768) {
        setTimeout(() => {
          text.style.transition= "all 0s ease";
          text.style.left= newXPos;
          text.style.bottom= newYPos;
        }, 690);
      }
      setTimeout(() => {
        text.style.transition= "all .7s ease";
        text.innerText = newText;
        text.style.opacity= "1";
        shade.style.opacity = "0";
      }, 700);
    })
  }, []);

  return <div id="highend-gallery-container">
      <div id="first-section-background">
          <div id="first-section-shade"/>
          <p id="first-section-text">Expert Repairs for Your Premium Home Equipment</p>
          <div id="types-container">
            <div id="types">
              <span className="image-btn" id="btn1"><div className="image-btn-shade">Sub Zero </div></span>
              <span className="image-btn" id="btn2"><div className="image-btn-shade">Monogram</div></span>
              <span className="image-btn" id="btn3"><div className="image-btn-shade">Liebherr</div></span>
              <span className="image-btn" id="btn4" ><div className="image-btn-shade">Viking</div></span>
            </div>
          </div>
        </div>
      </div>
};

export default HighendGallery;
