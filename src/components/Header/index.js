// This is Header component /Navigation Component
import React, { useState } from "react";
import logo from "/home/kubigor/react/Agency-website/src/MySite/12/Final-logo-alpha.png"
import styled from "styled-components";

const Headers = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 5rem;
background-color: var(--deep-blue);
color: var(--white)
position: relative;
z-index: 500;
max-height: 4.5rem;


`;
const Logo = styled.a`
display: flex;
aligh-items: center;
max-width:40%;
hight:auto;
cursor:pointer;

img {
  margin-right: 1rem;
  min-width: 9rem;
}

`;
const Nav = styled.nav`
width: 150rem;
max-width: 40rem;
align-items: center;
align-content: space-between;
display: flex;
flex-direction: row;
column-gap: 1rem;

@media only Screen and (max-width: 48em){
  display: none;
}

a{
  
  font-weight: 600;
  color: var(--white);
  line-height: 1.5;
  min-width: 4rem;
  

  &::after{
    content:"";
    display: block;
    height: 3px;
    width: 3px;
    background: transparent;
    transition: width 0.5s;
  }
    &:not(:last-child):hover::after{
    width:100%;
    background:#41D0FF;
  }
}
`
const Button = styled.button`
background-color: var(--orange);
padding: 0.5rem 1rem;
border-radius: 20px;
border: 2px solid black;
color: white;
text-shadow: 0 0 2px black, 0 0 2px black;
font-weight: 600;
cursor: pointer;
transition: all 0.2s;

&:hover{
  transform: scale(0.95);
}
`
const HamburgerBtn = styled.button`
position: relative;
background-color: transparent;
width:2rem;
height: 2px;
cursor: pointer;
display: none;

@media only Screen and (max-width: 48em){
  display: inline-block;
}

&::before,&::after{
  content:'';
  background-color: white;
  width:2rem;
  height: 2px;
  display: inline-block;
  position: absolute;
  left: 0;
  cursor: pointer;
  transition: all 0.3s;
}
&::before{
  top: ${props => (props.clicked ? "0" : "-0.5rem")};
  transform: ${props => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
}
&::after{
  top: ${props => (props.clicked ? "0" : "0.5rem")};
  transform: ${props => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
}
}
`
const MobileMenu = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  opacity: ${props => (props.clicked ? "0.95" : 0)};
  visibility: ${props => (props.clicked ? "visible" : "hidden")};
  background: #646464;
  border-radius: 15px;
  margin: 0.5rem;
  overflow-x: hidden;

  a{
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1rem;
    cursor: pointer;
  }

`
const Header = () => {

  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  return (
  <Headers>
    <div>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      </div>
      <Nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact" onClick={() => {}}>
          <Button>Request Service</Button>
        </a>
      </Nav>
      <HamburgerBtn onClick={() => handleClick() } clicked={click}>
        <span />
      </HamburgerBtn>
      <MobileMenu clicked={click}>
        <a href="#home" onClick={() => handleClick() }>Home</a>
        <a href="#about" onClick={() => handleClick() }>About</a>
        <a href="#services" onClick={() => handleClick() }>Services</a>
        <a href="#contact" onClick={() => handleClick() }>
          <Button>Request Service</Button>
        </a>
      </MobileMenu>
      </Headers>
  )
};

export default Header;
