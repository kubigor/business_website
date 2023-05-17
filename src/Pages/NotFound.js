import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
display: flex;
background-color: var(--peach);
flex-direction: column;
justify-content: center;
aligh-items: center;
text-align: center;
font-size: 13vh;
font-weight: 500;
padding: 3rem;
`


const NotFound = () => {
  return <Container >
    <h1>404</h1>
    <p>Page Not Found</p>
    </Container>
};

export default NotFound;