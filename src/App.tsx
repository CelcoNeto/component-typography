import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Typography } from './components/typography';
import { theme } from './theme/globals';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Typography />
  </ThemeProvider>
);
