import React from 'react';
import { useState } from 'react';
import './Slides.css'


const Slides = () => {
  const [activeTab, setActiveTab] = useState("tab-refrigerator-repair");

  const tabs = [
    { id: "tab-refrigerator-repair", label: "Professional Refrigerator Repair" },
    { id: "tab-washer-repair", label: "Reliable Washing Machine Repair" },
    { id: "tab-dishwasher-repair", label: "Efficient Dishwasher Repair Services" },
    { id: "tab-oven-repair", label: "Top-Quality Oven Repair Solutions" },
    { id: "tab-dryer-repair", label: "Fast & Affordable Dryer Repair" },
    { id: "tab-stove-repair", label: "Expert Stove and Cooktop Repair" },
  ];

  const tabContent = {
    "tab-refrigerator-repair": (
      <>
        <h3>Expert Refrigerator Repair in Seattle</h3>
        <p>
          Is your refrigerator not cooling, leaking, or making strange noises? Our <strong>certified refrigerator repair technicians in Seattle</strong> fix all major brands, including Samsung, LG, Whirlpool, and more. We diagnose and repair cooling issues, thermostat failures, and compressor problems efficiently.  
        </p>
        <p><strong>Get your fridge running like new—schedule a repair today!</strong></p>
      </>
    ),
    "tab-washer-repair": (
      <>
        <h3>Reliable Washing Machine Repair in Seattle</h3>
        <p>
          Don’t let a malfunctioning washer disrupt your laundry routine! Our <strong>Seattle washing machine repair specialists</strong> handle drum issues, drainage problems, and motor failures. We work with top brands like Maytag, GE, and Bosch to restore your appliance's efficiency.  
        </p>
        <p><strong>Book a same-day washer repair service now!</strong></p>
      </>
    ),
    "tab-dishwasher-repair": (
      <>
        <h3>Professional Dishwasher Repair in Seattle</h3>
        <p>
          Is your dishwasher not cleaning properly, leaking, or leaving residue? Our <strong>Seattle dishwasher repair team</strong> specializes in fixing clogged drains, faulty pumps, and heating element issues. We repair all major brands, ensuring your dishes come out spotless.  
        </p>
        <p><strong>Contact us today for fast and affordable dishwasher repair.</strong></p>
      </>
    ),
    "tab-oven-repair": (
      <>
        <h3>Seattle’s Trusted Oven Repair Experts</h3>
        <p>
          Struggling with temperature inconsistencies, a broken heating element, or ignition issues? Our <strong>Seattle oven repair specialists</strong> service gas, electric, and convection ovens from brands like Viking, Wolf, and KitchenAid. We ensure your oven works efficiently for perfect baking and cooking.  
        </p>
        <p><strong>Schedule an expert oven repair service now!</strong></p>
      </>
    ),
    "tab-dryer-repair": (
      <>
        <h3>Fast & Affordable Dryer Repair in Seattle</h3>
        <p>
          A faulty dryer can be frustrating! Whether it's <strong>not heating, making loud noises, or taking too long to dry</strong>, our Seattle dryer repair team can fix it. We specialize in repairing Whirlpool, Samsung, and GE dryers, ensuring energy efficiency and faster drying.  
        </p>
        <p><strong>Book a quick dryer repair today!</strong></p>
      </>
    ),
    "tab-stove-repair": (
      <>
        <h3>Seattle Stove & Cooktop Repair</h3>
        <p>
          Having trouble with your stove burners not igniting, uneven heating, or a broken cooktop? Our <strong>Seattle stove and cooktop repair specialists</strong> fix gas, electric, and induction models. We ensure safe and precise cooking performance for your home.  
        </p>
        <p><strong>Call now for expert stove repair service!</strong></p>
      </>
    ),
  };

  return (
    <section className="tab-section bg-gray-3">
      <div className="main-container">
        <div className="heading-wrapper-3">
          <h2 className="heading-5">Expert Appliance Repair Services in Seattle</h2>
        </div>
        <div className="tabs w-tabs">
          <div className="tabs-menu w-tab-menu" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-link w-inline-block w-tab-link ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
              >
                <div>{tab.label}</div>
              </button>
            ))}
          </div>
          <div className="tabs-content w-tab-content">
            <div className="tab-pane w-tab-pane active" role="tabpanel">
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slides;