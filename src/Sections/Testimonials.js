// This is Testimonials component
import React from "react";
import Background from "../Images/fridge-repair-person.jpg"
import Slider from "react-slick";
import Card from "../components/Card";
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import "./Testimonials.css"

const Testimonials = () => {
  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return <div class="testimonials-container" style={{background:Background}}>
    <div class="carousal-container">
      <h1 id="title">Happy customers!</h1>
      <div id="carousal">
        <Slider {...settings}>
            <Card
                text="I want to say a huge thank you to specialist Andrew. He quickly arrived, examined my refrigerator in detail, and professionally performed repairs. In the process, he was very neat, polite and punctual. Upon completion of the repair, I was issued a warranty receipt for a new spare part. I am very happy!"
                name="Emma Bellucci"
                image="Image-3"
            />
            <Card
                text="Very responsive from the start.  I reached out on Friday when my dryer broke, by the end of the day they gave me a reasonable quote and ordered the part I needed.  The part came in by Monday, and we scheduled them to come out on Wednesday.  Igor came right on schedule and was finished in the estimated time."
                name="Chelsea P"
                image="Image-4"
            />
          </Slider>
      </div>
    </div>
  </div>;
};

export default Testimonials;
