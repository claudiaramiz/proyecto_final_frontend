import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blog from './components/Blog';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Logout from './components/Logout';
import BlogList from './components/BlogList';
import Categories from './components/Categories';

import { I18nextProvider } from 'react-i18next';
import i18n from './config/localization/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Navigation />
          <Routes>
          <Route path='/' element={<App></App>}></Route>
          <Route path='/Categories' element={<Categories></Categories>}></Route>
          <Route path='/Blog' element={<Blog></Blog>}></Route>
          <Route path='/BlogList' element={<BlogList></BlogList>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path='/Logout' element={<Logout></Logout>}></Route>
          </Routes>
        </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

