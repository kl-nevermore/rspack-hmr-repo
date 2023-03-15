import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CountProvider from './CountProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>,
);
