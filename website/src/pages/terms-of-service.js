//This is home page, It will contains all the sections require in this page.
import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Terms from '../sections/Terms'
import './PagesStyle.css'


const TermsOfService = () => {
  return <div id="terms-of-service" > 
      <Terms />
    </div>
;
};

export default TermsOfService;
