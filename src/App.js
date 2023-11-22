import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Request from "./Pages/Request"
import Services from "./Pages/Services"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import NotFound from './Pages/NotFound';
import HighEnds from './Pages/HighEnds';
import TermsOfService from "./Pages/TermsOfService"
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
