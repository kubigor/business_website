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
import {headerOptions, imageOptions, textOptions} from "./GalleryData"



import React from "react";
import "./Gallery.css";

const Gallery = () => {
    function runGallery() {
      const container = document.getElementById("gallery-container");
      
      const displayDescription = () => {
        const description = document.getElementById('gallery-description')
        description.style.display = "flex";
        container.removeEventListener("click", displayDescription);
      }

      container.addEventListener("click", displayDescription);

      container.addEventListener("click", (e) => {
        if (e.target.nodeName === "IMG" || e.target.nodeName === "P") {
          changeImage(Number(e.target.parentElement.getAttribute('value')));
          ScrollDown()
        }
      });

      container.addEventListener("mouseover", (e) => {
        if ((e.target.nodeName === "IMG" || e.target.nodeName === "P") && window.innerWidth >= 768) {
          const text = e.target.parentElement.querySelector('.card-text');
          text.style.transform = "translate3d(0, -100%, 0)";
        }
      });

      container.addEventListener("mouseout", (e) => {
        if ((e.target.nodeName === "IMG" || e.target.nodeName === "P") && window.innerWidth >= 768) {
          const text = e.target.parentElement.querySelector('.card-text');
          text.style.transform = "translate3d(0, 0, 0)";
        }
      });

      const images = document.getElementsByClassName("gallery-image");
      for (let image of images) {
        image.addEventListener("mouseover", (e) => {
          for (let image of images) {
            if (image !== e.target) {
              image.style.opacity = 0.6
              image.style.filter = "grayscale(.8)"
            }
          }
        })
        image.addEventListener("mouseout", (e) => {
          for (let image of images) {
            if (image !== e.target) {
              image.style.opacity = 1;
              image.style.filter = "grayscale(0)"
            }
          }
        })
      }
    };

    function ScrollDown() {
      const element = document.getElementById("gallery-description");
      element.scrollIntoView({
        behavior:"smooth",
        block:"start",
        inline:"nearest"
      })
    }

    function changeImage(pos) {
      const element = document.getElementById("gallery-description");
      const descriptionImageOne = document.getElementById("image-one");
      const descriptionImageTwo = document.getElementById("image-two");
      const descriptionText = document.getElementById("description-text");
      const descriptionHeader = document.getElementById("description-header");
      element.style.opacity = 1;
      descriptionImageOne.src = imageOptions[pos][0];
      descriptionImageTwo.src = imageOptions[pos][1];
      descriptionText.textContent = textOptions[pos];
      descriptionHeader.textContent = headerOptions[pos];
    };
    
  return <div id="gallery" >
    <div id="gallery-container">
      <h1 id="gallery-title">Our services</h1>
      <div class="gallery-row">
        <span class="filter" value="0"><img class="gallery-image" src={fridge} alt="Refrigerator LG"/><p class="card-text" >Fridge repair</p></span>
        <span class="filter" value="1"><img class="gallery-image" src={washer} alt="Washing Machine Bosch"/><p class="card-text">Washer repair</p></span>
        <span class="filter" value="2"><img class="gallery-image" src={dryer} alt="Set of washer and dryer Samsung"/><p class="card-text">Dryer repair</p></span>
      </div>
      <div class="gallery-row">
        <span class="filter" value="3"><img class="gallery-image" src={range} alt="Range Bertazzoni"/><p class="card-text">Range repair</p></span>
        <span class="filter" value="4"><img class="gallery-image" src={cooktop} alt="Gas cooktop Signature"/><p class="card-text">Cooktop repair</p></span>
        <span class="filter" value="5"><img class="gallery-image" src={oven} alt="Built-in double oven Bosch"/><p class="card-text">Built-in oven repair</p></span>
      </div>
      <div class="gallery-row">
        <span class="filter" value="6"><img class="gallery-image" src={dishwasher} alt="Dishwasher Bosch"/><p class="card-text">Dishwasher repair</p></span>
        <span class="filter" value="7"><img class="gallery-image" src={center} alt="Laundry center GE"/><p class="card-text">Laundry center repair</p></span>
        <span class="filter" value="8" onLoad={runGallery}><img class="gallery-image" src={disposal} alt="Garbage disposal under the sink"/><p class="card-text">Garbage disposal replacement</p></span>
      </div>
    </div>
    <div id="gallery-description" >
      <div id="image-section">
        <img class="description-image" id="image-one" alt="Appliance issue number one"/>
        <img class="description-image" id="image-two" alt="Appliance issue number two"/>
      </div>
      <div id="description-text-field">
        <h3 id="description-header">Type Placeholder</h3>
        <p id="description-text">Text Placeholder</p>
      </div>
    </div>
  </div>;
};

export default Gallery;
