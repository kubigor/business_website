// This is Header component /Navigation Component
import React, { useState } from "react";
import { Link } from '../../../src/node_modules/react-router-dom';
import logo from '../../Images/Final-logo-alpha.png'
import styled from "styled-components";

const Headers = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 5rem;
background-color: var(--deep-blue);
color: white;
position: relative;
z-index: 500;
width:100vw;



`;
const Logo = styled.a`
display: flex;
aligh-items: center;
padding-left: 10%;
width: 35%;
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
column-gap: 2rem;
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
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${props => (props.clicked ? "0.98" : 0)};
  visibility: ${props => (props.clicked ? "visible" : "hidden")};
  background: #646464;
  border-radius: 35px;
  margin: 0.5rem;
  overflow: hidden;
  z-index: 1;

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
  <Headers id="home">
    <div>
      <Logo>
        <Link to ="/"><img src={logo} alt="logo" /></Link>
      </Logo>
    </div>
    <Nav>
      <Link to ="/">Home</Link>
      <Link to ="/about">About</Link>
      <Link to ="/services">Services</Link>
      <Link to ="/request">
        <Button>Request Service</Button>
      </Link>
    </Nav>
    <HamburgerBtn onClick={() => handleClick() } clicked={click}>
      <span />
    </HamburgerBtn>
    <MobileMenu clicked={click}>
      <Link to ="/" onClick={() => handleClick() }>Home</Link>
      <Link to ="/about" onClick={() => handleClick() }>About</Link>
      <Link to ="/services" onClick={() => handleClick() }>Services</Link>
      <Link to ="/request" onClick={() => handleClick() }>
        <Button>Request Service</Button>
      </Link>
    </MobileMenu>
    </Headers>
  )
};

export default Header;
