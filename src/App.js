import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Request from "./Pages/Request"
import Services from "./Pages/Services"
import ScrollToTop from "./components/ScrollToTop"
import NotFound from './Pages/NotFound';
import HighEnds from './Pages/Types/HighEnds';
import TermsOfService from "./Pages/TermsOfService"
import RefrigeratorRepair from "./Pages/Types/Refrigerator"
import WasherRepair from "./Pages/Types/Washer"
import RangeRepair from "./Pages/Types/Range"
import DryerRepair from "./Pages/Types/Dryer"
import DishwasherRepair from "./Pages/Types/Dishwasher"
import CooktopRepair from "./Pages/Types/Cooktop"
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnalyticsTracking } from './globalVars';
import Loader from './components/Loader';
import './globalStyle.css';

const PageHolder = styled.div`
background-color: var(--peach);
`

function App() {
  function loadGTM() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtm.js?id=G-F692C7MG6R';
    script.async = true;
    document.head.appendChild(script);
  }

  const [isLoading, setIsLoading] = useState(true);
  
  const location = useLocation();
  useEffect(() => {  
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    })
  }, [location]);

  useEffect(() => {
    loadGTM();
  }, []);
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageHolder>
      {isLoading && <Loader />}
      <Header />
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/request" element={<Request />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/refrigerator" element={<RefrigeratorRepair />} />
        <Route path="/services/range" element={<RangeRepair />} />
        <Route path="/services/cooktop" element={<CooktopRepair />} />
        <Route path="/services/washer" element={<WasherRepair />} />
        <Route path="/services/dryer" element={<DryerRepair />} />
        <Route path="/services/dishwasher" element={<DishwasherRepair />} />
        <Route path="/high-ends" element={<HighEnds />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </PageHolder>
  );
}

export default App;
