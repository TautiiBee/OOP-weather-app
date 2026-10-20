import React from 'react';
import ReactDOM from 'react-dom/client';
import Client from './Client/Client';
import AppThemeProvider from './theme/AppThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <Client />
    </AppThemeProvider>
  </React.StrictMode>
);
