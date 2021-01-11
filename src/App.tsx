import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Typography } from './shared/components/typography';
import { theme } from './theme/globals';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Typography size='large' tag='subtitle2' fontColor='magenta'>
      Teste
    </Typography>
  </ThemeProvider>
);
