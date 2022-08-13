import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blog from './components/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import BlogList from './components/BlogList';
import Categories from './components/Categories';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/localization/i18n';
import { Auth0Provider } from '@auth0/auth0-react';
import NavbarInferior from './components/NavbarInferior';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain='dev-nrpjmknc.us.auth0.com' 
    clientId='qfnQjiQbhTSfV9TIWaLDxP8M4qUiNKnp' 
    redirectUri={window.location.origin}>
    <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Navigation />
          <NavbarInferior />
          <Routes>
          <Route path='/' element={<App></App>}></Route>
          <Route path='/Categories' element={<Categories></Categories>}></Route>
          <Route path='/Blog' element={<Blog></Blog>}></Route>
          <Route path='/BlogList' element={<BlogList></BlogList>}></Route>
          </Routes>
        </I18nextProvider>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

