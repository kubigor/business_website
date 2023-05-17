// This is Contact component, it will contain contact form.
import React from "react";
import styled from "styled-components";
import Google from '../../Images/googlemaps.png'
import Yelp from '../../Images/yelp.png'

const ContactSection = styled.div`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: var(--peach);
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(14rem + 25vw);
  padding: 3rem;
  background-color: #003889;
  border: 1px solid black;
  border-radius: 16px;
  box-shadow: 15px 15px 15px black;

  @media only Screen and (max-width: 48em){
    width: 90%;
  }
`
const Title = styled.h1`
  display: inline-block;
  font-size: calc(1rem + 2vw);
  margin-top: 1rem;
  margin-bottom: 3rem;
  position: relative;
  color: white;
  text-shadow: 0 0 5px black, 0 0 5px black;

@media only Screen and (max-width: 48em){
  font-size: 2.5rem;
  width:150px
}

&::before {
  content: '';
  height: 1px;
  width: 50%;
  position: absolute;
  left: 50%;
  bottom: 0;
  border-bottom: 2px solid var(--pink)
  transform: translate(-50%);
}
`
const Icons = styled.div`
  display: inline;
  margin-top: 2rem;
  a {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  &:hover{
    img{
      filter: sepia(30%) saturate(500%) 
    }
  }
  }
  img {
    width: 3rem;
    height: auto;
  }
`
const Form = styled.form`
display:flex;
flex-direction: column;
padding:2rem
margin-bottom:1rem
background-color:blue;
min-width: 65%;

input{
  padding: 1 rem calc(0.5rem + 1vw)
  background-color: white;
  border:none;
  border-radius: 3px;
  
  @media only Screen and (max-width: 48em){
    height: 30px;
  }
  &:active,
  &:focus {
    border:none;
    background-color: #CACACA
  }
}
  textarea{
  padding: 1 rem calc(0.5rem + 1vw)
  background-color: white;
  border-radius: 3px;
  border:none;
  
  &:active,
  &:focus {
    border:none;
    background-color: #CACACA
}
}
label{
  color: white;
  margin-left: 1rem;
  margin-bottom: -1.5rem;
  font-weight: 500;
}
button{
  padding: 1rem 2 rem;
  background-color: var(--orange);
  color: black;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid black;
  font-size: 1.2rem;
  transition: all 0.2s;

  &:hover{
    transform: scale(0.95);
  }
  
  @media only Screen and (max-width: 48em){
    height: 50px;
  }

  &:hover{
    transform: scale(1.05);
  }
  &:active{
    transform: scale(0.95);
  }
}
`
const Contact = () => {
  return <ContactSection>
    <Frame>
    <Title>Request Service</Title>
    <Form action="https://formsubmit.co/majorrepairing@gmail.com" method="POST">
      <input type="hidden" name="_captcha" value="false"></input>
      <label for="name">Name</label><br></br>
      <input type="text" name="name" id="name" required/><br></br>    
      <label for="phone">Phone number</label><br></br>
      <input type="tel" name="phone" id="phone" required/><br></br>
      <label for="email">Email</label><br></br>
      <input type="email" name="email" id="email"/><br></br>
      <label for="address">Address</label><br></br>
      <input type="text" name="address" id="address" required/><br></br>
      <label for="zip" >Zip code</label><br></br>
      <input type="text" name="zip" id="zip" required/><br></br>
      <label for="brand">Brand and type of appliance</label><br></br>
      <input type="text" name="brand" id="brand" placeholder="LG refrigerator"/><br></br>
      <label for="problem">Problem and description</label><br></br>
      <textarea name="problem" id="problem" placeholder="Not cooling" rows="4"/><br></br>
      <button>Send the request</button>
    </Form>
    <Icons>
      <a href="https://www.yelp.com/biz/major-appliance-repair-everett-2">
        <img src={Yelp} alt="Yelp" />
      </a>
      <a href="https://goo.gl/maps/ZLRVKagXNCkL9GPL9">
        <img src={Google} alt="Google" />
      </a>
      
    </Icons>
    </Frame>
  </ContactSection>;
};

export default Contact;
