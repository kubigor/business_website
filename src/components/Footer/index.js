// This is footer component
import React from "react";
import styled from "styled-components";
import phone from '../../Images/call-2-1.svg'
import mail from '../../Images/envelope-01.svg'
import mark from '../../Images/map.svg'
import logo from '../../Images/Final-logo-alpha.png'
import Map from '../../components/Map'

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
  padding: 30px 70px 30px 70px;
  display: flex;
  flex-direction: row;
  max-width: 80vw;
  min-width: 70vw;
  justify-content: space-between;
  align-items: center;
  background-color: var(--light-grey);
  
  @media only Screen and (max-width: 48em){
    flex-direction: column;
    width: 100vw;
    max-width: 100vw;
    padding: 10px 0px 10px 0px;
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
    font-size:1rem;
  }
  a{
    color:navy;
    font-weight: 500;
    font-size:1.2rem;

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
  width: 60%;
  height: auto;
  justify-content: space-between;

  @media only Screen and (max-width: 48em){
    flex-direction: column;
    align-items: center;
    
    div:last-child{
      margin-top: 2rem;
    }
  }
  
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-evently;
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

  iframe{
    height: 12rem;
    width: 40%;

    @media only Screen and (max-width: 48em){
      width: 100%
    }
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
  color: white;
  font-size: 0.7rem;
  
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
        <h2>Services</h2>
        <ul>
          <li>Refrigerator repair</li>
          <li>Dryer repair</li>
          <li>Washer repair</li>
          <li>Oven repair</li>
          <li>Cooktop repair</li>
          <li>Dishawsher Repair</li>
        </ul>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181059.65840277984!2d-122.37504506178115!3d47.8763649733226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549007315f4d880f%3A0x3480d761c45eca0d!2sMajor%20Appliance%20Repair!5e0!3m2!1sen!2sus!4v1684107606042!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </SecondSection>
    <BottomLine>
      <p>© 2023 All rights reserved</p>
    </BottomLine>
  </Foo>;
};

export default Footer;
