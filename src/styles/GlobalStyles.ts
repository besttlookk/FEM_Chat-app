import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    --col-violet:hsl(276, 55%, 52%); //chat on the left
    --col-violet-light:hsl(276, 100%, 81%); //sub-heading at the top of the app UI
    --col-violet-dark:hsl(271, 36%, 24%); //main heading
    --col-violet-gray:hsl(270, 7%, 64%);//paragraph
    --col-gray:hsl(206, 6%, 79%); //placeholder-text
    --col-gray-dark: hsl(271, 15%, 43%); // chat on the dark
    --col-white:hsl(0, 0%, 100%);
    --col-light:hsl(270, 20%, 96%);//app background
    --col-submit-btn: hsl(271, 36%, 24%); // submit button bg
    --col-radio-outline:hsl(289, 100%, 72%);

    --grad-magenta: hsl(293, 100%, 63%);
    --grad-violet:hsl(264, 100%, 61%);

    /* --gradient:linear-gradient(to right ,hsl(264, 100%, 61%), hsl(293, 100%, 63% ); */


    --font-primary: 'Rubik', sans-serif;

    --height-header: 8rem;
  }

  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font: 18px;
    font-family: var(--font-primary);
    background-color: var(--col-light);

  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }

  }

  h1,h2,h3{
    font-family: var(--font-secondary);
    font-weight: 900;
  }


`;

export default GlobalStyle;
