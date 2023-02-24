import React from 'react';

import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from "react-query";
import { CssBaseline } from '@mui/material';
import AppRoute from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  }
});

root.render(
  <React.StrictMode>
    <QueryClientProvider
      client={queryClient}
    >
      <CssBaseline />
      <AppRoute />
    </QueryClientProvider>
  </React.StrictMode>
);
