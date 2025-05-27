// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import Font Awesome CSS
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faGlobe, faPalette } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faPhone, faGlobe, faPalette);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);