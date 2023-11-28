// This is Contact component, it will contain contact form.
import React from "react";
import Google from '../Images/googlemaps-icon.png'
import Yelp from '../Images/yelp-logo.png'
import HousecallProButton from '../components/HouseCall'
import {yelpProfile} from "../globalVars";
import {googleProfile} from "../globalVars";
import "./Contact.css"

const Contact = () => {
  return <div id="form-container">
    <h1 id="form-title">Request Service</h1>
    <form id="request-form" action="https://formsubmit.co/majorrepairing@gmail.com" method="POST">
      <input type="hidden" name="_captcha" value="false"/>
      <label for="name">Name</label><br></br>
      <input type="text" name="name" id="name" required/>
      <label for="phone">Phone number</label><br></br>
      <input type="tel" name="phone" id="phone" required/>
      <label for="email">Email</label><br></br>
      <input type="email" name="email" id="email"/>
      <label for="address">Address</label><br></br>
      <input type="text" name="address" id="address" required/>
      <label for="zip" >Zip code</label><br></br>
      <input type="text" name="zip" id="zip" required/>
      <label for="brand">Brand and type of appliance</label><br></br>
      <input type="text" name="brand" id="brand" placeholder="LG refrigerator"/>
      <label for="problem">Problem and description</label><br></br>
      <textarea name="problem" id="problem" placeholder="Not cooling" rows="4"/>
      <button>Send the request</button>
    </form>
      <HousecallProButton />
    <div class="profiles">
      <a id="yelp-profile"  href={yelpProfile}>
        <img src={Yelp} alt="Yelp logo" />
      </a>
      <a id="google-profile" href={googleProfile} >
        <img src={Google} alt="Google logo" />
      </a>
    </div>
    </div>
};

export default Contact;
