import React, { useEffect, useRef, useState } from 'react';
import './HighendAddon.css'
import range1 from '../Images/appliances/thermador-range.webp'
import cooktop from '../Images/appliances/jennair-cooktop.webp'
import range2 from '../Images/appliances/viking-range.webp'
import refrigerator from '../Images/appliances/true-refrigerator.webp'

const HighendAddon = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const elementsRef = useRef([]);

  const onIntersection = (entries) => {
    entries.forEach(entry => {
      setVisibleItems(prevVisibleItems => ({
        ...prevVisibleItems,
        [entry.target.id]: entry.isIntersecting
      }));
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    elementsRef.current.forEach(elem => {
      if (elem) observer.observe(elem);
    });
    return () => {
      elementsRef.current.forEach(elem => {
        if (elem) observer.unobserve(elem);
      });
    };
  }, []);
  

  return <div id="addons">
    <div id="addon-one">
      <div className="first-half">
        <div id="item-1" ref={el => elementsRef.current[1] = el} classNameName={visibleItems['item-1'] ? 'highend-addon-info animate-left' : 'highend-addon-info in-left'}>
          <h1>We repair all brands and types of large gas and electric cooking appliances</h1>
        </div>
        <div classNameName={visibleItems['item-1'] ? 'animate-right' : 'in-right'}>
          <div className="image-frame"><img loading="lazy" className="highend-addon-image" src={range1} alt='Stainless steel Thermador range'/></div>
        </div>
      </div>
      <div className="second-half">
        <div classNameName={visibleItems['item-2']  ? 'highend-addon-info animate-right desktop-hidden' : 'highend-addon-info in-right desktop-hidden'}> 
          <h1>Most repairs come with a one-year warranty, satisfaction guearanteed</h1>
        </div>
        <div id="item-2" ref={el => elementsRef.current[2] = el} classNameName={visibleItems['item-2'] ? 'animate-left' : 'in-left'}>
        <div className="image-frame"><img loading="lazy" className="highend-addon-image" src={cooktop} alt='Stainless steel Jenn-Air cooktop'/></div>
        </div>
        <div classNameName={visibleItems['item-2']  ? 'highend-addon-info animate-right mobile-hidden' : 'highend-addon-info in-right mobile-hidden'}> 
          <h1>Most repairs come with a one-year warranty, satisfaction guearanteed</h1>
        </div>
      </div>
    </div>
    <div id="addon-two">
      <div className="first-half">
        <div id="item-3" ref={el => elementsRef.current[3] = el} classNameName={visibleItems['item-3'] ? 'highend-addon-info animate-left' : 'highend-addon-info in-left'}>
          <h1>We will take care of your stove, cooktop, and oven</h1>
        </div>
        <div classNameName={visibleItems['item-3'] ? 'animate-right' : 'in-right'} id="addon-image-one">
        <div className="image-frame"><img loading="lazy" className="highend-addon-image" src={range2} alt='Stainless steel Viking range'/></div>
        </div>
      </div>
      <div className="second-half">
        <div classNameName={visibleItems['item-4'] ? 'highend-addon-info animate-right desktop-hidden' : 'highend-addon-info in-right desktop-hidden'}>  
          <h1>As well as of the refrigerator, wine cooler, or freezer</h1>
        </div>
        <div id="item-4" ref={el => elementsRef.current[4] = el} classNameName={visibleItems['item-4'] ? 'animate-left' : 'in-left'}>
        <div className="image-frame"><img loading="lazy" className="highend-addon-image" src={refrigerator} alt='Fridge, freezer, wine cooler set up from True residential'/></div>
        </div>
        <div classNameName={visibleItems['item-4'] ? 'highend-addon-info animate-right mobile-hidden' : 'highend-addon-info in-right mobile-hidden'}>  
          <h1>As well as of the refrigerator, wine cooler, or freezer</h1>
        </div>
      </div>
    </div>
  </div>
};

export default HighendAddon;
