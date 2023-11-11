//This is home page, It will contains all the sections require in this page.
import Steps from '../Sections/Steps'
import Divider from '../Sections/Divider'
import React from 'react'
import Brands from '../Sections/Brands'
import Charges from '../Sections/Charges'


const Services = () => {
  return<div id="services" >
      <Steps />
      <Charges />
      <Divider />
      <Brands />
    </div>;
};

export default Services;
