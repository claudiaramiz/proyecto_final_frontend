import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blog from './components/Blog';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<App></App>}></Route>
            <Route path='/Blog' element={<Blog></Blog>}></Route>
            <Route path='/Login' element={<Login></Login>}></Route>
          </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

