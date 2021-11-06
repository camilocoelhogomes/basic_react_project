import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Page1 from '../pages/Page1/Page1';
import Page2 from '../pages/Page2/Page2';

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page1 />} exact />
      <Route path="/2" element={<Page2 />} exact />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
