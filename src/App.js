import React, {useEffect} from 'react';
import styled from 'styled-components';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Request from "./Pages/Request"
import Services from "./Pages/Services"
import ScrollToTop from "./components/ScrollToTop"
import NotFound from './Pages/NotFound';
import HighEnds from './Pages/HighEnds';
import TermsOfService from "./Pages/TermsOfService"
import RefrigeratorRepair from "./Pages/Types/Refrigerator"
import WasherRepair from "./Pages/Types/Washer"
import RangeRepair from "./Pages/Types/Range"
import DryerRepair from "./Pages/Types/Dryer"
import DishwasherRepair from "./Pages/Types/Dishwasher"
import CooktopRepair from "./Pages/Types/Cooktop"
import City from "./Pages/Cities/City"
import { Route, Routes } from 'react-router-dom';
import { AnalyticsTracking } from './globalVars';
import './globalStyle.css';

const PageHolder = styled.div`
background-color: var(--peach);
`

function App() {
  function loadGTM() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtm.js?id=' + AnalyticsTracking;
    script.async = true;
    document.head.appendChild(script);
  }
  
  useEffect(() => {
    loadGTM();
  }, []);

  return (
    <PageHolder>
      <Header />
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/request" element={<Request />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/services/refrigerator" element={<RefrigeratorRepair />} />
        <Route exact path="/services/range" element={<RangeRepair />} />
        <Route exact path="/services/cooktop" element={<CooktopRepair />} />
        <Route exact path="/services/washer" element={<WasherRepair />} />
        <Route exact path="/services/dryer" element={<DryerRepair />} />
        <Route exact path="/services/dishwasher" element={<DishwasherRepair />} />
        <Route exact path="/high-ends" element={<HighEnds />} />
        <Route exact path="/terms-of-service" element={<TermsOfService />} />
        <Route exact path="/service-area/:cityName" element={<City />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </PageHolder>
  );
}

export default App;
