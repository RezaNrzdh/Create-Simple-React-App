import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import About from './routes/about';
import Home from './routes/home';
import List from './routes/list';
import Product from './routes/product';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/list' element={<List />} />
          <Route path='/product/:id' element={<Product />} />
        </Route>
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
