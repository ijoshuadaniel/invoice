import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { AppContextProvider } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/:path' element={<App />} />
          <Route path='/:path/:sub' element={<App />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);
