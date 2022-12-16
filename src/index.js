import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from '@mui/material';
import * as themes from "./styles/themes"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.dark}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
