import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import PrivateDashboard from './Component/PrivateRoutes/PrivateDashboard';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
