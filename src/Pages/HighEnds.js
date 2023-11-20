//This is home page, It will contains all the sections require in this page.
import React, { useEffect } from 'react'
import './PagesStyle.css'


const HighEnds = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://online-booking.housecallpro.com/script.js?token=ef8a37880ad64305aaaee491dd1fc976&orgName=Major-Appliance-Repair";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openModal = () => {
    if (window.HCPWidget && typeof window.HCPWidget.openModal === 'function') {
      window.HCPWidget.openModal();
    }
  };
  return <div id="request" >
       <button
      data-token="ef8a37880ad64305aaaee491dd1fc976"
      data-orgname="Major-Appliance-Repair"
      className="hcp-button"
      onClick={openModal}
    >
      Book online
    </button>
    </div>;
};

export default HighEnds;
