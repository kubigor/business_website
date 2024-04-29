// This is Contact component, it will contain contact form.
import React from "react";
import "./ServiceArea.css"

const ServiceArea = () => {
  return <div className="cities-image">
    <div className="cities-box">
      <h2 className="city-table-header">We serve Bellevue and nearby cities</h2>
      <div className="cities-table">
        <div className="cities-column">
            <a href="https://majorappliancerepair.info/service-area/seattle">Seattle</a>
            <a href="https://majorappliancerepair.info/service-area/mercer_island">Mercer Island</a>
            <a href="https://majorappliancerepair.info/service-area/shoreline">Shoreline</a>
            <a href="https://majorappliancerepair.info/service-area/bellevue">Bellevue</a>
            <a href="https://majorappliancerepair.info/service-area/kenmore">Kenmore</a>
            <a href="https://majorappliancerepair.info/service-area/mountlake_terrace">Mountlake Terrace</a>
            <a href="https://majorappliancerepair.info/service-area/maltby">Maltby</a>
        </div>
        <div className="cities-column">
            <a href="https://majorappliancerepair.info/service-area/redmond">Redmond</a>
            <a href="https://majorappliancerepair.info/service-area/kirkland">Kirkland</a>
            <a href="https://majorappliancerepair.info/service-area/woodinville">Woodinville</a>
            <a href="https://majorappliancerepair.info/service-area/issaquah">Issaquah</a>
            <a href="https://majorappliancerepair.info/service-area/sammamish">Sammamish</a>
            <a href="https://majorappliancerepair.info/service-area/renton">Renton</a>
            <a href="https://majorappliancerepair.info/service-area/newcastle">Newcastle</a>
        </div>
        <div className="cities-column">
            <a href="https://majorappliancerepair.info/service-area/everett">Everett</a>
            <a href="https://majorappliancerepair.info/service-area/bothell">Bothell</a>
            <a href="https://majorappliancerepair.info/service-area/mukilteo">Mukilteo</a>
            <a href="https://majorappliancerepair.info/service-area/mill_creek">Mill Creek</a>
            <a href="https://majorappliancerepair.info/service-area/lynnwood">Lynnwood</a>
            <a href="https://majorappliancerepair.info/service-area/alderwood_manor">Alderwood Manor</a>
            <a href="https://majorappliancerepair.info/service-area/edmonds">Edmonds</a>
        </div>
      </div>
    </div>
  </div>
};

export default ServiceArea;
