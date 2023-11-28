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
import { Route, Routes } from 'react-router-dom';
import { AnalyticsTracking } from './globalVars';
import ReactGA from 'react-ga4';
import './globalStyle.css';
import Loader from './components/Loader';

const PageHolder = styled.div`
background-color: var(--peach);
`

ReactGA.initialize(AnalyticsTracking)

function App() {
  ReactGA.initialize(AnalyticsTracking);
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Changed page" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, );
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  // ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Custom Title" });
  return (
     <PageHolder>
        <Header />
        <Routes>
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

    // <PageHolder>
    //   <Header />
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/request" element={<Request />} />
    //     <Route path="/services" element={<Services />} />
    //     <Route path="/services/refrigerator" element={<RefrigeratorRepair />} />
    //     <Route path="/services/range" element={<RangeRepair />} />
    //     <Route path="/services/cooktop" element={<CooktopRepair />} />
    //     <Route path="/services/washer" element={<WasherRepair />} />
    //     <Route path="/services/dryer" element={<DryerRepair />} />
    //     <Route path="/services/dishwasher" element={<DishwasherRepair />} />
    //     <Route path="/high-ends" element={<HighEnds />} />
    //     <Route path="/terms-of-service" element={<TermsOfService />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    //   <Footer />
    //   <ScrollToTop />
    // </PageHolder>
  );
}

export default App;
