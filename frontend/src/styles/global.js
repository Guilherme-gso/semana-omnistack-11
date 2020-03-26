import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({theme}) => theme.primaryColor};
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
  input, button, textarea {
    font: 400 14px 'Roboto', sans-serif;
  }
  button, img {
    cursor: pointer;
  }
`;

export default GlobalStyle;