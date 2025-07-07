import React, { useEffect, useRef, useState } from 'react';
import range1 from '../Images/appliances/thermador-range.webp'
import cooktop from '../Images/appliances/jennair-cooktop.webp'
import range2 from '../Images/appliances/viking-range.webp'
import refrigerator from '../Images/appliances/true-refrigerator.webp'
import { Helmet } from 'react-helmet';

import './HighendAddon.css'
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
      <Helmet>
        <link rel="preload" href="/static/media/thermador-range.7787d0420ece5926e52d.webp" as="image" />
        <link rel="preload" href="/static/media/jennair-cooktop.98360dec789efc87c0ce.webp" as="image" />
        <link rel="preload" href="/static/media/viking-range.d0612753aa09f850324a.webp" as="image" />
        <link rel="preload" href="/static/media/true-refrigerator.688c7546e82c30e81720.webp" as="image" />
      </Helmet>
    <div id="addon-one">
      <div className="first-half">
        <div id="item-1" ref={el => elementsRef.current[1] = el} className={visibleItems['item-1'] ? 'highend-addon-info animate-left' : 'highend-addon-info in-left'}>
          <h2>We repair all brands and types of large gas and electric cooking appliances</h2>
        </div>
        <div className={visibleItems['item-1'] ? 'animate-right' : 'in-right'}>
          <div className="image-frame"><img loading="lazy" className="highend-addon-image" src={range1} alt='Stainless steel Thermador range'/></div>
        </div>
      </div>
      <div className="second-half">
        <div className={visibleItems['item-2']  ? 'highend-addon-info animate-right desktop-hidden' : 'highend-addon-info in-right desktop-hidden'}> 
          <h2>Most repairs come with a one-year warranty, satisfaction guearanteed</h2>
        </div>
        <div id="item-2" ref={el => elementsRef.current[2] = el} className={visibleItems['item-2'] ? 'animate-left' : 'in-left'}>
        <div className="image-frame"><img loading="lazy" className="highend-addon-image" src={cooktop} alt='Stainless steel Jenn-Air cooktop'/></div>
        </div>
        <div className={visibleItems['item-2']  ? 'highend-addon-info animate-right mobile-hidden' : 'highend-addon-info in-right mobile-hidden'}> 
          <h2>Most repairs come with a one-year warranty, satisfaction guearanteed</h2>
        </div>
      </div>
    </div>
    <div id="addon-two">
      <div className="first-half">
        <div id="item-3" ref={el => elementsRef.current[3] = el} className={visibleItems['item-3'] ? 'highend-addon-info animate-left' : 'highend-addon-info in-left'}>
          <h2>We will take care of your stove, cooktop, and oven</h2>
        </div>
        <div className={visibleItems['item-3'] ? 'animate-right' : 'in-right'} id="addon-image-one">
        <div className="image-frame"><img loading="lazy" className="highend-addon-image" src={range2} alt='Stainless steel Viking range'/></div>
        </div>
      </div>
      <div className="second-half">
        <div className={visibleItems['item-4'] ? 'highend-addon-info animate-right desktop-hidden' : 'highend-addon-info in-right desktop-hidden'}>  
          <h2>As well as of the refrigerator, wine cooler, or freezer</h2>
        </div>
        <div id="item-4" ref={el => elementsRef.current[4] = el} className={visibleItems['item-4'] ? 'animate-left' : 'in-left'}>
        <div className="image-frame"><img loading="lazy" className="highend-addon-image" src={refrigerator} alt='Fridge, freezer, wine cooler set up from True residential'/></div>
        </div>
        <div className={visibleItems['item-4'] ? 'highend-addon-info animate-right mobile-hidden' : 'highend-addon-info in-right mobile-hidden'}>  
          <h2>As well as of the refrigerator, wine cooler, or freezer</h2>
        </div>
      </div>
    </div>
  </div>
};

export default HighendAddon;
