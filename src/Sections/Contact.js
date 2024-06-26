// This is Contact component, it will contain contact form.
import React from "react";
import Google from '../Images/googlemaps-icon.webp'
import Yelp from '../Images/yelp-logo.webp'
import HousecallProButton from '../components/HouseCall'
import {yelpProfile} from "../globalVars";
import {googleProfile} from "../globalVars";
import "./Contact.css"

const Contact = () => {
  return <div id="form-container">
    <h1 id="form-title">Request Service</h1>
    <form id="request-form" action="https://formsubmit.co/majorrepairing@gmail.com" method="POST">
      <input type="hidden" name="_captcha" value="false"/>
      <label htmlFor="name">Name</label><br></br>
      <input type="text" name="name" id="name" required/>
      <label htmlFor="phone">Phone number</label><br></br>
      <input type="tel" name="phone" id="phone" required/>
      <label htmlFor="email">Email</label><br></br>
      <input type="email" name="email" id="email"/>
      <label htmlFor="address">Address</label><br></br>
      <input type="text" name="address" id="address" required/>
      <label htmlFor="zip" >Zip code</label><br></br>
      <input type="text" name="zip" id="zip" required/>
      <label htmlFor="brand">Brand and type of appliance</label><br></br>
      <input type="text" name="brand" id="brand" placeholder="LG refrigerator"/>
      <label htmlFor="problem">Problem and description</label><br></br>
      <textarea name="problem" id="problem" placeholder="Not cooling" rows="4"/>
      <button>Send the request</button>
    </form>
      <HousecallProButton />
    <div className="profiles">
      <a id="yelp-profile"  href={yelpProfile}>
        <img loading="lazy" src={Yelp} alt="Yelp logo" />
      </a>
      <a id="google-profile" href={googleProfile} >
        <img loading="lazy" src={Google} alt="Google logo" />
      </a>
    </div>
    </div>
};

export default Contact;
