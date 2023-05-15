const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`

${''}

:root{
     /* Colors */
  --white:#fff;
  --nav:#35353f;
  --nav2:#3f3d56;
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

.map-container{
    width: 1000px;
    height: 300px;
 
}

html{
  scroll-behavior:smooth;
}
    body,
    html,
    a {
        font-family: 'Poppins', sans-serif;
            }
    body {

        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--background);

        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }

    img{
        width:80%;
        hight:auto;
    }
`