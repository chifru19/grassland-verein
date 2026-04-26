import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is the bridge between your logic (App.js) and the browser (index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);