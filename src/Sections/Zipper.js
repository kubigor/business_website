// This is About component, It will contain about us info.
import React from "react";
import "./Zipper.css"
import {zipCodes} from "../globalVars"

const Steps = () => {
  function handleChange(e) {
    const answer = document.getElementById("answer");
    if (e.target.value.length === 5) {
      if (zipCodes.has(Number(e.target.value))) {
        answer.innerText = "Yes, we can help you!"
        answer.style.color = "green"
      } else {
        answer.innerText = "You're a little too far - contact us to verify!"
        answer.style.color = "rgb(140, 0, 0)"
      }
    } else {
      answer.innerText = ""
    }
  }
  return <div id="zipper-container">
    <div id="zipper-background">
      <div id="zipper-elements">
        <h2 id="question">Do we service your area?</h2>
        <input id="field" type="field" placeholder=" Zip " maxLength={5} onChange={handleChange}/>
        <p id="answer"></p>
      </div>
    </div>
  </div>
};

export default Steps;
