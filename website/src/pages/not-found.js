import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import error from '../images/error404.webp'
import './PagesStyle.css'


const NotFound = () => {
  return <div id="not-found" >
      <img loading="lazy" id="image-not-found" src={error} alt="error404" />
    </div>
};

export default NotFound;