// This is Contact component, it will contain contact form.
import fridge from "../Images/appliances/lg-refrigerator.jpg"
import washer from "../Images/appliances/washer.jpg"
import dryer from "../Images/appliances/samsung-washer-and-dryer.jpg"
import range from "../Images/appliances/bertazzoni-range.jpg"
import cooktop from "../Images/appliances/gas-cooktop.jpg"
import oven from "../Images/appliances/bosch-oven.jpg"
import disposal from "../Images/appliances/garbage-disposal.jpg"
import center from "../Images/appliances/laundry-center.jpg"
import dishwasher from "../Images/appliances/bosch-dishwasher.jpg"


import React from "react";
import "./Gallery.css";

const Gallery = () => {
    function runGallery() {
      const images = document.getElementsByClassName("gallery-image");
      for (let image of images) {
        image.addEventListener("mouseover", (e) => {
          for (let image of images) {
            if (image != e.target) {
              image.style.opacity = 0.6
              image.style.filter = "grayscale(.8)"
            }
            if (image != e.target) {
              
            }
          }
        })
        image.addEventListener("mouseout", (e) => {
          for (let image of images) {
            if (image != e.target) {
              image.style.opacity = 1;
              image.style.filter = "grayscale(0)"
            }
          }
        })
      }
    }
  return <div id="gallery-container" onLoad={runGallery}>
    <h1 id="gallery-title">Our services</h1>
    <div class="gallery-row">
      <span class="filter" ><img class="gallery-image" src={fridge}/><p class="card-text">Fridge repair</p></span>
      <span class="filter" ><img class="gallery-image" src={washer}/></span>
      <span class="filter" ><img class="gallery-image" src={dryer}/></span>
    </div>
    <div class="gallery-row">
      <span class="filter" ><img class="gallery-image" src={range}/></span>
      <span class="filter" ><img class="gallery-image" src={cooktop}/></span>
      <span class="filter" ><img class="gallery-image" src={oven}/></span>
    </div>
    <div class="gallery-row">
      <span class="filter" ><img class="gallery-image" src={dishwasher}/></span>
      <span class="filter" ><img class="gallery-image" src={center}/></span>
      <span class="filter" ><img class="gallery-image" src={disposal}/></span>
    </div>
  </div>;
};

export default Gallery;
