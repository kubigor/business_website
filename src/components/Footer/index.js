// This is footer component
import React from "react";
import styled from "styled-components";
import phone from '/home/kubigor/react/Agency-website/src/MySite/02/01/call-2-1.svg'
import mail from '/home/kubigor/react/Agency-website/src/MySite/02/01/envelope-01.svg'
import mark from '/home/kubigor/react/Agency-website/src/MySite/02/01/map.svg'
import logo from "/home/kubigor/react/Agency-website/src/MySite/12/Final-logo-alpha.png"

const Foo = styled.div`
  
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: var(--deep-blue);
  align-items: center;
  justify-content: center;
`
const FirstSection = styled.div`
  margin-top: -4vw;
  padding: 30px;
  display: flex;
  flex-direction: row;
  width: 80vw;
  justify-content: space-between;
  align-items: center;
  background-color: #DADADA;
  
  @media only Screen and (max-width: 48em){
    flex-direction: column;
    width: 100vw;
  }

  img{
    height: 50px;
  }

  div{
    display: flex;
    flex-direction: column;
    font-size:calc(0.8rem + 0.3vw);
    @media only Screen and (max-width: 48em){
      font-size: 6vw;
      align-items: center
    }
  }
  p{
    font-size:0.7rem;
  }
  a{
    color:navy;
    font-weight: 500;

    &:hover{
      color:blue;
    }
  }
  
`

const SecondSection = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  margin: 3rem;
  width: auto;
  height: auto;

  @media only Screen and (max-width: 48em){
    flex-direction: column;
    
    div:last-child{
      margin-top: 2rem;
    }
  }
  
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    items-align: center;
    height: 25vh
  }
  
  div:last-child{
    margin-left: 3rem;
  }
  
  img{
    width: 14em;
  }

  p{
    font-size:12px;
    margin-top: 1rem;
    width: 15rem;
  }

  li{
    font-size:14px;
  }
`
const Button = styled.button`
  width: 17em;
  transition: all 0.2s;
  background-color: var(--orange);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 2px solid black;
  color: white;
  text-shadow: 0 0 2px black, 0 0 2px black;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
}
`
const BottomLine = styled.div`
  display: flex;
  
`
const Footer = () => {
  return <Foo>
    <FirstSection>
      <div>
        <img src={phone} alt="phone" />
      </div>
      <div>
        <p>CALL US FOR FREE</p>
        <a href="tel:9712746698">+1 971 274 6698</a>
      </div>
      <div>
        <img src={mail} alt="mail" />
      </div>
      <div>
        <p>WRITE AT ANY TIME</p>
        <a href="mailto:major.repairing@gmail.com">major.repairing@gmail.com</a>
      </div>
      <div>
        <img src={mark} alt="mark" />
      </div>
      <div>
        <p>THE OFFICE LOCATION</p>
          <a href="https://goo.gl/maps/tuayz4qTqsSGJCNa9">128 127th St SE, Everett, WA</a>
      </div>
    </FirstSection>
    <SecondSection>
      <div>
        <img src={logo} alt="logo"/>
        <p>Our specialist will perform the necessary repairs right in your home</p>
        <Button>Contact us</Button>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li>Refrigerator repair</li>
          <li>Dryer repair</li>
          <li>Washer repair</li>
          <li>Oven repair</li>
          <li>Cooktop repair</li>
          <li>Dishawsher Repair</li>
        </ul>
      </div>
    </SecondSection>
    <BottomLine>

    </BottomLine>
  </Foo>;
};

export default Footer;
