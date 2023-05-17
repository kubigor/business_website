import React from 'react';
import styled from 'styled-components';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Request from "./Pages/Request"
import Services from "./Pages/Services"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import NotFound from './Pages/NotFound';
import { GlobalStyle } from './globalStyles';
import { Route, Routes } from 'react-router-dom';

const PageHolder = styled.div`
background-color: var(--peach);
`

function App() {
  return (
    <PageHolder>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/request" element={<Request />} />
        <Route path="/services" element={<Services />} />
        <Route path="/business_website" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </PageHolder>
  );
}

export default App;
