import React from 'react';

import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import AppRoute from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <AppRoute />
  </React.StrictMode>
);
