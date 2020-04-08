import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
        
import './styles.scss';


ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
