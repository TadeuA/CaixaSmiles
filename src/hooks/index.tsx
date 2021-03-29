import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme } from '../styles/themes/default';
import GlobalStyles from '../styles/global';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
// hooks
// export {  };
// Provider
// export {  };
