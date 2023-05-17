const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`

${''}

:root{
     /* Colors */
  --orange:#FE8800;
  --deep-blue:#000432;
  --peach:#FFF9F6;
  --light-grey:#DADADA;
}

${''}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}

html{
  scroll-behavior:smooth;
}
    body {
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    img{
        width:100%;
    }
`