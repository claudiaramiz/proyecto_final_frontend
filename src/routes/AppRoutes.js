import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import App from '../App';
import NotFoundPage from '../components/NotFoundPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='*' element={<NotFoundPage></NotFoundPage>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;