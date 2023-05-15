// This is Contact component, it will contain contact form.
import React from "react";
import styled from "styled-components";
import phone from '../../Images/call-2-1.svg'

const FirstSection = styled.div`
  padding: 30px 70px 30px 70px;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align:center;
  background-color: var(--light-grey);
  
  @media only Screen and (max-width: 48em){
    flex-direction: column;
    width: 100vw;
    max-width: 100vw;
    padding: 10px 0px 10px 0px;
  }

  img{
    height: 65px;
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
    font-weight: 600;
    font-size: 2.5rem;
    margin-right: 3rem;
    color: white;
    text-shadow: -1px -1px navy, 1px 1px navy, -1px 1px navy, 1px -1px navy;
    
    @media only Screen and (max-width: 48em){
      font-size:2rem;
      margin-right: 0;
    }
  
  }
  a{
    color:navy;
    font-weight: 500;
    font-size:1.8rem;

    &:hover{
      color:blue;
    }
  }
`

const Divider = () => {
  return <FirstSection>
  <p>CALL US FOR FREE ESTIMATE</p>
  <div>
    <img src={phone} alt="phone" />
  </div>
  <div>
    <a href="tel:9712746698">+1 971 274 6698</a>
  </div>
</FirstSection>;
};

export default Divider;
