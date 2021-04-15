import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import customRoutesConfig from './RoutesConfig.js';

export default () => {
  return (
    <BrowserRouter>
      <div id="main">{renderRoutes(customRoutesConfig)}</div>
    </BrowserRouter>
  );
};

