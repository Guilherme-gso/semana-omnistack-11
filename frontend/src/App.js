import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import {themes} from './themes/themes';
import Routes from './routes/Routes';

function App() {
  return (
    <ThemeProvider theme={themes}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
