// This is Contact component, it will contain contact form.
import fridge from "../Images/appliances/lg-refrigerator.webp"
import washer from "../Images/appliances/washer.webp"
import dryer from "../Images/appliances/samsung-washer-and-dryer.webp"
import range from "../Images/appliances/bertazzoni-range.webp"
import cooktop from "../Images/appliances/gas-cooktop.webp"
import oven from "../Images/appliances/bosch-oven.webp"
import disposal from "../Images/appliances/garbage-disposal.webp"
import center from "../Images/appliances/laundry-center.webp"
import dishwasher from "../Images/appliances/bosch-dishwasher.webp"
import {headerOptions, imageOptions, linkOptions, textOptions} from "./GalleryData"
import { Helmet } from "react-helmet"



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
      const descriptionMore = document.getElementById("more");
      element.style.opacity = 1;
      descriptionImageOne.src = imageOptions[pos][0];
      descriptionImageTwo.src = imageOptions[pos][1];
      descriptionText.textContent = textOptions[pos];
      descriptionHeader.textContent = headerOptions[pos];
      descriptionMore.href = linkOptions[pos];
    };
    
  return <div id="gallery" >
    <Helmet>
    <link rel="preload" href={fridge} as="image" />
    <link rel="preload" href={washer} as="image" />
    <link rel="preload" href={dryer} as="image" />
    <link rel="preload" href={range} as="image" />
    <link rel="preload" href={cooktop} as="image" />
    <link rel="preload" href={oven} as="image" />
    <link rel="preload" href={dishwasher} as="image" />
    <link rel="preload" href={center} as="image" />
    <link rel="preload" href={disposal} as="image" />
    </Helmet>
    <div id="gallery-container">
      <h1 id="gallery-title">Our services</h1>
      <div className="gallery-row">
        <span className="filter" value="0"><img  className="gallery-image" src={fridge} alt="Refrigerator LG"/><p className="card-text" >Fridge repair</p></span>
        <span className="filter" value="1"><img  className="gallery-image" src={washer} alt="Washing Machine Bosch"/><p className="card-text">Washer repair</p></span>
        <span className="filter" value="2"><img  className="gallery-image" src={dryer} alt="Set of washer and dryer Samsung"/><p className="card-text">Dryer repair</p></span>
      </div>
      <div className="gallery-row">
        <span className="filter" value="3"><img className="gallery-image" src={range} alt="Range Bertazzoni"/><p className="card-text">Range repair</p></span>
        <span className="filter" value="4"><img className="gallery-image" src={cooktop} alt="Gas cooktop Signature"/><p className="card-text">Cooktop repair</p></span>
        <span className="filter" value="5"><img className="gallery-image" src={oven} alt="Built-in double oven Bosch"/><p className="card-text">Built-in oven repair</p></span>
      </div>
      <div className="gallery-row">
        <span className="filter" value="6"><img className="gallery-image" src={dishwasher} alt="Dishwasher Bosch"/><p className="card-text">Dishwasher repair</p></span>
        <span className="filter" value="7"><img className="gallery-image" src={center} alt="Laundry center GE"/><p className="card-text">Laundry center repair</p></span>
        <span className="filter" value="8" onLoad={runGallery}><img className="gallery-image" src={disposal} alt="Garbage disposal under the sink"/><p className="card-text">Garbage disposal replacement</p></span>
      </div>
    </div>
    <div id="gallery-description" >
      <div id="image-section">
        <img loading="lazy" className="description-image" id="image-one" alt="Appliance issue number one"/>
        <img loading="lazy" className="description-image" id="image-two" alt="Appliance issue number two"/>
      </div>
      <div id="description-text-field">
        <h3 id="description-header">Type Placeholder</h3>
        <p id="description-text">Text Placeholder</p>
        <a id="more" src="">See more...</a>
      </div>
    </div>
  </div>;
};

export default Gallery;
