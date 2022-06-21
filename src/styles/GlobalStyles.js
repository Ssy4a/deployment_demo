import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
{
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    ul[class],
    ol[class] {
      padding: 0;
    }
    
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    html{
      min-height: 100%;
    }
    
    body {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
      font-family: 'Poppins', sans-serif; 
    }
    
    ul[class],
    ol[class] {
      list-style: none;
    }
    
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }
    
    img {
      max-width: 100%;
      display: block;
    }
    
    article > * + * {
      margin-top: 1em;
    }
    
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
    
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
    .container {
        min-height: 100%;
        max-width: 980px;
        margin: auto;
        flex: 1 1 auto;
    }
    .wrapper{
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    input,
    textArea {outline:none;}
    textarea { resize: none; }
}
`;

export default GlobalStyle;