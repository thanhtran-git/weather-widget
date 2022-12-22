import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FetchWeatherData from './FetchWeatherData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchWeatherData />
  </React.StrictMode>
);


reportWebVitals();
