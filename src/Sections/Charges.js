import React from "react";
import Fee from "../components/Fee";
import "./Charges.css"

const Charges = () => {
  return <div id="charges-container">
  <div class="charges-unit">
    <div id="fee-cloud">
        <Fee></Fee>
    </div>
    <h1>Our Rates</h1>
    <p>Our initial appliance repair <b>service call</b> charge is $80. <br/>
    Once we’ve diagnosed what’s causing the problem, we’ll provide you with a full service quote. If you decide to accept it, your service call charge will be applied toward the cost of the repair.</p>
  </div>
  <div class="charges-unit">
    <h1>The visit</h1>
    <p>Our technician will arrive in a vehicle stocked with common replacement parts. Our goal is to fix the problem in just one visit. After the repair, we will issue a warranty, which depends on the type of repair provided and is matched to the market (as the prices are).</p>
  </div>
</ div>
};
export default Charges;
