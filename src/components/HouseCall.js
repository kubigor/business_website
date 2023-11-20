import React, { useEffect } from 'react';

const HousecallProButton = () => {
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

  return (
    <button
      data-token="ef8a37880ad64305aaaee491dd1fc976"
      data-orgname="Major-Appliance-Repair"
      className="hcp-button"
      onClick={openModal}
      class="btn-bright"
      style={{backgroundColor: "var(--light-blue)"}}
    >
      Book online
    </button>
  );
};

export default HousecallProButton;