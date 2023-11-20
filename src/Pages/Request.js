//This is home page, It will contains all the sections require in this page.
import Contact from '../Sections/Contact'
import React from 'react'
import './PagesStyle.css'


const Request = () => {
  return <div id="request" > 
      <Contact />
      <iframe title = "location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d282517.40931547293!2d-122.36461102497174!3d47.66482695510196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549007315f4d880f%3A0x3480d761c45eca0d!2sMajor%20Appliance%20Repair!5e0!3m2!1sen!2sus!4v1698993141190!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>;
};

export default Request;
