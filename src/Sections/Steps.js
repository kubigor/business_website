// This is About component, It will contain about us info.
import React from "react";
import "./Steps.css"

const Steps = () => {
  return <div id="steps-image">
      <div className="steps-section">
        <p><b>How we work</b></p>
        <h2>Step-by-step repair proces</h2>
        <div className="steps-container">
          <div className="step">
            <h3>Breakdown analysis</h3>
            <span>STEP 1</span>
            <p>We will contact you within 30 minutes and listen to your problem.</p>
          </div>
          <div className="step">
            <h3>Departure of master</h3>
            <span>STEP 2</span>
            <p>Our specialist will come to you and make a detailed diagnosis.</p>
          </div>
          <div className="step">
            <h3>Repair of appliance</h3>
            <span>STEP 3</span>
            <p>The master will perform the necessary repairs right in your home.</p>
          </div>
            <div className="step">
            <h3>Issuing a guarantee</h3>
            <span>STEP 4</span>
            <p>After the repair is completed, you will receive a warranty.</p>
          </div>
      </div>
    </div>
  </div>
};

export default Steps;
