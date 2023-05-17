import React from "react";
import styled from "styled-components";
import Map from "../../Images/Blank_US_Map_(states_only).svg"
import Bosch from "../../Images/map/bosch-logo-e1627871048189.png"
import Frigidaire from "../../Images/map/1200px-Frigidaire.svg.png"
import Kenmore from "../../Images/map/479-4793258_kenmore-logo-kenmore-hd-png-download.png"
import Viking from "../../Images/map/brand-logo-viking.png"
import Dacor from "../../Images/map/dacor-logo-800x450.png"
import GE from "../../Images/map/GE-Logo.png"
import Electrolux from "../../Images/map/electrolux-5-logo-png-transparent.png"
import LG from "../../Images/map/lg-logo.png"
import Samsung from "../../Images/map/samsung_logo_PNG14.png"
import SubZero from "../../Images/map/tri-brand_4-color_badge_vertical_eps-1170x475.png"
import Maytag from "../../Images/map/unnamed.png"
import Whirlpool from "../../Images/map/whirlpool-logo-png-transparent.png"



const Box = styled.div`
background-image: url("${Map}");
background-repeat: no-repeat;
background-position: center;
background-size: 70%;
width: 100vw;
`
const Rows = styled.div`
display: flex;
flex-direction: column;
max-width: 35vw;
margin-left: 10%;
align-content: flex-end;
`

const Row = styled.div`
display: flex;
width: 80%;
align-items: center;
width: 80vw;

img{
  min-width: 17vw;
  margin-right: 5%;
}

`


const Brands = () => {
  return <Box>
    <Rows>
    <Row>
      <img src={Whirlpool} alt="whirlpool logo" />
      <img src={LG} alt="LG logo" />
      <img src={SubZero} alt="SubZero logo" />
      <img src={Samsung} alt="Samsung logo" />
    </Row>
    <Row>
      <img src={Viking} alt="Viking logo" />  
      <img src={Maytag} alt="Maytag logo" />
      <img src={Bosch} alt="Bosch logo" />
      <img src={GE} alt="GE logo" />
    </Row>
    <Row>
      <img src={Frigidaire} alt="Frigidaire logo" />
      <img src={Electrolux} alt="Electrolux logo" />
      <img src={Dacor} alt="Dacor logo" />
      <img src={Kenmore} alt="Kenmore logo" />
    </Row>
    </Rows>
  </Box>;
};

export default Brands;
