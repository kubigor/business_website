import React, {useEffect} from 'react'
import subzero from "../Images/appliances/subzero-fridge.webp";
import viking from "../Images/appliances/viking-fridge.jpeg";
import monogram from "../Images/appliances/monogram-fridge.jpeg";
import liebherr from "../Images/appliances/liebherr-fridge.jpg";
import './HighendGallery.css'

const HighendGallery = () => {
  useEffect(() => {
    const shade = document.getElementById('first-section-shade');
    const menuHeight = document.getElementById('menu').clientHeight;
    const types = document.getElementById('types');
    const background = document.getElementById('first-section-background');
    
    shade.style.opacity = '.55';
    window.scrollTo(0, menuHeight);
    types.style.bottom = "0";
    types.addEventListener('click', (e) => {
      let newBackground = "../../Images/appliances/sub-zero-kitchen.jpg";
      switch (e.target.innerText) {
        case 'Sub Zero': newBackground = subzero; break;
        case 'Viking': newBackground = viking; break;
        case 'Monogram': newBackground = monogram; break;
        case 'Liebherr': newBackground = liebherr; break;
      }

      shade.style.opacity= "1";
      shade.style.transition= ".7s";
      background.style.transitionDelay= ".7s";
      background.style.backgroundImage = `url(${newBackground})`
      setTimeout(() => {
        shade.style.opacity = "0";
      }, 700);
    })
  }, []);

  return <div id="highend-gallery-container">
      <div id="first-section-background" class="background">
          <div id="first-section-shade"></div>
          <div id="types-container">
            <div id="types">
              <span class="image-btn" id="btn1"><div class="image-btn-shade">Sub Zero </div></span>
              <span class="image-btn" id="btn3"><div class="image-btn-shade">Monogram</div></span>
              <span class="image-btn" id="btn4"><div class="image-btn-shade">Liebherr</div></span>
              <span class="image-btn" id="btn2" ><div class="image-btn-shade">Viking</div></span>
            </div>
          </div>
        </div>
      </div>
};

export default HighendGallery;
