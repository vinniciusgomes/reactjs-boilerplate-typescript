import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from '@styles/Global';
import theme from '@styles/Theme';

import AppProvider from './hooks';
import Routes from './routes';

const Bootstrap: React.FC = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  );
};

export default Bootstrap;
