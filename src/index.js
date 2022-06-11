import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const basename = window.location.host;
root.render(
  <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
    <App />
  </BrowserRouter>
);

