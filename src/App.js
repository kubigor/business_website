import React, { Suspense } from 'react'; 
import { GlobalStyle } from './globalStyles';
import Home from "./Pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"


function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

export default App;
