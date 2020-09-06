import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
  }

  body{
      background-color: #f7f7f7;
  }
`;

export default GlobalStyle;
